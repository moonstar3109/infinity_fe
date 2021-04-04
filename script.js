var slides = document.querySelector('.slides'),
    slide = document.querySelectorAll('.slides li'),
    currentIdx = 0,
    slideCount = slide.length,
    slideWidth = 1950,
    // slideMargin = 28,
    prevBtn = document.querySelector('.prev'),
    nextBtn = document.querySelector('.next');

    makeClone();
    function makeClone(){
        for(var i = 0 ; i < slideCount; i++){
            //a.cloneNode() => a 요소를 복사한다 (태그만 복사)
            //a.cloneNode(true) => a요소의 내용까지 복사한다
            var cloneSlide = slide[i].cloneNode(true);
            cloneSlide.classList.add('clone');
            //a.appendChild(b) -> a의 자식 요소 가장 마지막에 b를 추가한다
            slides.appendChild(cloneSlide);
        }
       for(var i = slideCount-1 ; i >= 0; i--){
        var cloneSlide = slide[i].cloneNode(true);
        cloneSlide.classList.add('clone');
         //a.prepend(b) -> a요소 앞에 b를 추가한다
         slides.prepend(cloneSlide);
       }
       updateWidth();//클론이 생성된 후 넓이를 새로 지정
       setInitialPos(); //클론이 생성된 후 화면에 보여지는 위치를 변경
       setTimeout(function(){
        slides.classList.add('animated');
       },100);

    }

    function updateWidth(){
        var currentSlides = document.querySelectorAll('.slides li');
        var newSlideCount = currentSlides.length;

        //ul의 넓이 구하는식
        var newWidth = (slideWidth) * newSlideCount +'px';
        slides.style.width = newWidth;
    }

    function setInitialPos(){
        var initialTranslateValue = -(slideWidth) * slideCount ; //왼쪽으로 당겨주어야 하기 때문에 음수로 변형
        //slides {transform:translateX(-1150px);}
        slides.style.transform = 'translateX(' + initialTranslateValue + 'px)';
        
    }
    nextBtn.addEventListener('click',function(){
        moveSlide(currentIdx + 1);
    })
    prevBtn.addEventListener('click',function(){
        moveSlide(currentIdx - 1);
    });

    function moveSlide(num){    
        slides.style.left = -num * (slideWidth) + 'px';
        currentIdx = num;
        console.log(currentIdx, slideCount);
        if(currentIdx == slideCount || currentIdx == -slideCount){
            setTimeout(function(){
                slides.classList.remove('animated');
                slides.style.left = '0px';
                currentIdx = 0;
            },500);
            setTimeout(function(){
                slides.classList.add('animated');
            },600);
          
        }
    }
