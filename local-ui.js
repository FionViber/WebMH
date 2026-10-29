/* Browser-local save management. No services, accounts, or network requests. */
(function () {
  'use strict';
  const copy = {
    en: {title:'Save data', intro:'Your progress is saved automatically in this browser. Export a backup to keep it when changing browsers or devices.', export:'Export save', import:'Import save', reset:'Start a new game', close:'Close', cancel:'Cancel', confirmImport:'Replace save', confirmReset:'Start over', importQuestion:'Replace your current progress with this backup?', resetQuestion:'Start from the beginning? Your current progress will be replaced. You can export a backup first.', exported:'Save exported.', unavailable:'Saving is unavailable. Allow this site to store data before continuing.', saved:'Last saved', ready:'Local save is ready.', error:'Could not complete this action. Your save has not been replaced.', invalid:'Choose a valid Merge Haven save file (up to 8 MB).', busy:'Please wait…'},
    zh: {title:'存档管理', intro:'游戏会自动将进度保存到此浏览器。更换浏览器或设备前，可导出备份，再导入继续游戏。', export:'导出存档', import:'导入存档', reset:'从头开始', close:'关闭', cancel:'取消', confirmImport:'替换存档', confirmReset:'重新开始', importQuestion:'要用这份备份替换当前游戏进度吗？', resetQuestion:'要从最初开始吗？当前进度将被替换。你可以先导出备份。', exported:'存档已导出。', unavailable:'无法保存进度。请先允许此网站存储数据，再继续游戏。', saved:'上次保存', ready:'本地存档已就绪。', error:'无法完成操作，当前存档未被替换。', invalid:'请选择有效的 Merge Haven 存档文件（不超过 8 MB）。', busy:'请稍候…'}
  };
  let dialog, status, message, confirmBox, confirmText, confirmButton, actions, input, lastFocus;
  let pendingAction = null, busy = false, current = copy.en;
  const element = (tag, className, text) => {const e=document.createElement(tag); if(className)e.className=className; if(text)e.textContent=text; return e;};
  const api = () => {if (!window.HavenLocalSave) throw Error('Save system is still loading.'); return window.HavenLocalSave;};
  function setMessage(text, error) {message.textContent=text;message.classList.toggle('haven-error',!!error);}
  function cancelConfirmation() {pendingAction=null;confirmBox.hidden=true;actions.hidden=false;}
  function ask(text, label, action) {confirmText.textContent=text;confirmButton.textContent=label;pendingAction=action;confirmBox.hidden=false;actions.hidden=true;confirmButton.focus();}
  async function run(action) {
    if (busy) return;
    busy=true; dialog.setAttribute('aria-busy','true');
    dialog.querySelectorAll('button').forEach(b=>b.disabled=true);
    try {await action();} catch(error) {setMessage(current.error+' '+(current===copy.en ? error.message : ''),true);cancelConfirmation();}
    finally {busy=false;dialog.removeAttribute('aria-busy');dialog.querySelectorAll('button').forEach(b=>b.disabled=false);}
  }
  function build() {
    dialog=element('dialog','haven-save-dialog');dialog.setAttribute('aria-labelledby','haven-save-title');
    const title=element('h1');title.id='haven-save-title';
    const intro=element('p','haven-save-intro');intro.dataset.copy='intro';
    status=element('p','haven-save-status');status.setAttribute('aria-live','polite');
    message=element('p','haven-save-message');message.setAttribute('role','status');
    actions=element('div','haven-save-actions');
    const exportButton=element('button','haven-primary');exportButton.dataset.copy='export';
    exportButton.addEventListener('click',()=>run(async()=>{
      const content=await api().exportData();
      const blob=new Blob([content],{type:'application/json'}), url=URL.createObjectURL(blob);
      const today=new Date(), date=[today.getFullYear(),String(today.getMonth()+1).padStart(2,'0'),String(today.getDate()).padStart(2,'0')].join('-');
      const link=element('a');link.href=url;link.download='Merge-Haven-save-'+date+'.json';
      document.body.appendChild(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);
      setMessage(current.exported,false);refreshStatus();
    }));
    const importButton=element('button');importButton.dataset.copy='import';
    input=element('input');input.type='file';input.accept='.json,application/json';input.hidden=true;
    importButton.addEventListener('click',()=>{input.value='';input.click();});
    input.addEventListener('change',()=>run(async()=>{
      const file=input.files&&input.files[0];if(!file)return;
      if(file.size>8*1024*1024)throw Error(current.invalid);
      const text=await file.text();await api().validateData(text);
      setMessage('',false);ask(current.importQuestion,current.confirmImport,()=>api().importData(text));
    }));
    const resetButton=element('button','haven-reset');resetButton.dataset.copy='reset';
    resetButton.addEventListener('click',()=>ask(current.resetQuestion,current.confirmReset,()=>api().reset()));
    actions.append(exportButton,importButton,resetButton);
    confirmBox=element('div','haven-save-confirm');confirmBox.hidden=true;
    confirmText=element('p');confirmButton=element('button','haven-primary');
    confirmButton.addEventListener('click',()=>run(async()=>{if(pendingAction){setMessage(current.busy,false);await pendingAction();}}));
    const cancel=element('button');cancel.dataset.copy='cancel';cancel.addEventListener('click',cancelConfirmation);
    confirmBox.append(confirmText,confirmButton,cancel);
    const close=element('button','haven-save-close');close.dataset.copy='close';close.addEventListener('click',()=>dialog.close());
    dialog.addEventListener('close',()=>{cancelConfirmation();if(lastFocus&&lastFocus.focus)lastFocus.focus();});
    dialog.addEventListener('cancel',e=>{if(busy)e.preventDefault();});
    ['pointerdown','pointerup','click','keydown','keyup'].forEach(type=>dialog.addEventListener(type,e=>e.stopPropagation()));
    dialog.append(title,intro,status,actions,confirmBox,message,close,input);document.body.appendChild(dialog);
  }
  function refreshStatus() {
    if(!dialog||!dialog.open)return;
    try {
      const s=api().getStatus();
      status.textContent=s.storageAvailable===false?current.unavailable:(s.lastSavedAt?current.saved+': '+new Date(s.lastSavedAt).toLocaleString(s.language==='zh'?'zh-CN':'en-US'):current.ready);
      status.classList.toggle('haven-error',s.storageAvailable===false);
    } catch(e) {status.textContent=e.message;}
  }
  window.HavenLocalUI={open:function(){
    if(!dialog)build();
    current=copy[api().getStatus().language==='zh'?'zh':'en'];
    dialog.querySelector('h1').textContent=current.title;
    dialog.querySelectorAll('[data-copy]').forEach(e=>e.textContent=current[e.dataset.copy]);
    cancelConfirmation();setMessage('',false);lastFocus=document.activeElement;
    if(!dialog.open)dialog.showModal();refreshStatus();
  },notifyStorageError:function(){
    if(document.getElementById('haven-storage-alert'))return;
    const warning=element('div','haven-storage-alert');warning.id='haven-storage-alert';warning.setAttribute('role','alert');
    warning.textContent=copy[window.HavenLocalSave&&api().getStatus().language==='zh'?'zh':'en'].unavailable;document.body.appendChild(warning);
  }};
  window.addEventListener('haven-save-conflict',function(){
    const zh=window.HavenLocalSave&&api().getStatus().language==='zh';
    const conflict=element('dialog','haven-save-dialog');
    conflict.append(element('h1',null,zh?'存档已在另一页面更新':'Save updated in another tab'),element('p',null,zh?'为避免覆盖新的进度，此页面已停止保存。重新载入后继续游戏。':'This tab has stopped saving to protect the newer progress. Reload to continue.'));
    const reload=element('button','haven-primary',zh?'重新载入':'Reload');reload.addEventListener('click',()=>location.reload());
    conflict.append(reload);conflict.addEventListener('cancel',e=>e.preventDefault());document.body.appendChild(conflict);conflict.showModal();
  });
  setInterval(function(){refreshStatus();if(window.HavenLocalSave){const s=api().getStatus();if(s.ready&&s.storageAvailable===false)window.HavenLocalUI.notifyStorageError();}},2000);
})();
