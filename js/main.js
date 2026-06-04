// 简单交互脚本：移动菜单、表单提交、设置年份
document.addEventListener('DOMContentLoaded', function(){
  // Toggle nav (works for multiple pages)
  document.querySelectorAll('.nav-toggle').forEach(function(btn){
    btn.addEventListener('click', function(){
      // find the nearest nav (fallback to global)
      const nav = document.querySelector('#siteNav') || document.querySelector('.site-nav');
      if(nav) nav.classList.toggle('show');
    });
  });

  // Set current year in footers
  const year = new Date().getFullYear();
  document.querySelectorAll('[id^="year"]').forEach(el => el.textContent = year);

  // Contact form submit (AJAX). Replace data-endpoint with your backend or Formspree/Netlify function.
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', async function(e){
      e.preventDefault();
      const status = document.getElementById('formStatus');
      status.textContent = '发送中……';
      const endpoint = form.dataset.endpoint || form.action;
      const data = Object.fromEntries(new FormData(form).entries());
      try{
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(data)
        });
        if(res.ok){
          status.textContent = '已发送，我们会尽快联系您。';
          form.reset();
        } else {
          const text = await res.text().catch(()=>res.statusText);
          status.textContent = '发送失败：' + (text || res.status);
        }
      }catch(err){
        status.textContent = '网络错误，稍后再试。';
        console.error(err);
      }
    });
  }
});
