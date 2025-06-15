document.addEventListener('DOMContentLoaded', () => {
    const background = document.querySelector('.image');
    const container = document.querySelector('.home-page');
    
    // 视差效果的强度
    const parallaxStrength = 0.02;
    
    container.addEventListener('mousemove', (e) => {
        // 获取鼠标在容器中的相对位置（-1 到 1 之间）
        const rect = container.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width * 2 - 1;
        const y = (e.clientY - rect.top) / rect.height * 2 - 1;
        
        // 计算移动距离
        const moveX = x * parallaxStrength * 100;
        const moveY = y * parallaxStrength * 100;
        
        // 应用变换（移除scale效果）
        background.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
    
    // 鼠标离开时重置位置
    container.addEventListener('mouseleave', () => {
        background.style.transform = 'translate(0, 0)';
    });
}); 

