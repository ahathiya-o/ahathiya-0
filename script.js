function toggleBox(boxElement) {
    const isActive = boxElement.classList.contains("active");
    

    document.querySelectorAll('.box').forEach(box => box.classList.remove('active'));
  
   
    if (!isActive) {
      boxElement.classList.add('active');
    }
  }
  