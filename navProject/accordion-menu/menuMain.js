    class Accordion {
        constructor(options) {
        // 기본 옵션과 사용자 지정 옵션을 병합
            this.config = Accordion.mergeConfig(options);
            this.accordion = document.querySelector(this.config.selector);
            // 이벤트 핸들러 내부의 this는 currentTarget
            this.accordion.addEventListener('click', this.toogle.bind(this));
        }

        static mergeConfig(options) {
        // 기본 옵션
            const config = {
                selector: '#accordion',
                multi: true
            };

            return { ...config, ...options };
        }

        toogle(event) {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
            if (!event.target.classList.contains('menu')) return;
            // click 이벤트를 발생시킨 <div class="menu"> 요소의 부모 요소인 li 요소
            const targetLi = event.target.parentNode;

            // 멀티 오픈을 허용하지 않으면 타깃 이외의 모든 서브메뉴를 클로즈한다.
            if (!this.config.multi) {
                [].filter.call(
                    this.accordion.childNodes,
                    li => li.nodeType === Node.ELEMENT_NODE && li !== targetLi
                ).forEach(li => li.classList.remove('show'));
        }

        // li 요소의 class에 "show"가 있으면 제거하고 없으면 추가한다.
            targetLi.classList.toggle('show');
        }
    }

    window.onload = function () {
        const accordion = new Accordion({ multi: false });
        // const accordion = new Accordion();
    };

    let test = "nodenode";
    console.log("name:"+test);