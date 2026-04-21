let cartCount = 0;

async function loadComponent(selector, file) {
  try {
    const response = await fetch(file);
    const html = await response.text();
    const element = document.querySelector(selector);
    if (element) {
      element.innerHTML = html;
      if (selector === '#header') {
        const cartEl = document.getElementById('cart-count');
        if (cartEl) cartEl.textContent = cartCount;
      }
    }
  } catch (error) {
    console.error(`Lỗi:`, error);
  }
}

window.addEventListener('DOMContentLoaded', async () => {
    await loadComponent('#header', 'components/header.html');
    await loadComponent('#footer', 'components/footer.html');
    
    window.addToCart = function(btn) {
        cartCount++;
        const cartEl = document.getElementById('cart-count');
        if (cartEl) cartEl.textContent = cartCount;
        
        btn.textContent = 'Đã thêm ✓';
        btn.classList.add('added');
        setTimeout(() => {
            btn.textContent = 'Thêm vào giỏ hàng';
            btn.classList.remove('added');
        }, 1800);
    };
});
