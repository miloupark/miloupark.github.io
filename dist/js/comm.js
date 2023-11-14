// Section 1 : intro-title gsap 
gsap.to(".btm-a", {
  x: 80, // 오른쪽으로 이동할 거리
  duration: 0.5, // 애니메이션 지속 시간
  onStart: function () {
    // "green" 애니메이션이 시작할 때 "purple", "orange", "blue"를 숨깁니다.
    gsap.set(".btm-r, .btm-c, .btm-h, .btm-i, .btm-v, .btm-e", { display: "none" });
  },
  onComplete: function () {
    // "green" 애니메이션이 끝난 후 "purple"을 보이도록 설정하고 페이드인 애니메이션을 적용합니다.
    gsap.set(".btm-r", { x: 90, display: "block", opacity: 0 }); // 초기에는 투명하게 설정
    gsap.to(".btm-r", {
      opacity: 1, // 투명에서 불투명으로 페이드인
      duration: 0.5, // 페이드인 지속 시간
      onComplete: function () {
        // "purple" 애니메이션이 끝난 후 "orange"을 보이도록 설정하고 페이드인 및 회전 애니메이션을 적용합니다.
        gsap.set(".btm-c", { x: 100, display: "block", opacity: 0 });
        gsap.to(".btm-c", {
          opacity: 1, // 투명에서 불투명으로 페이드인
          rotation: 360, // 회전 애니메이션
          duration: 0.5, // 애니메이션 지속 시간
          onComplete: function () {
            // "orange" 애니메이션이 끝난 후 "btm-h"를 보이도록 설정하고 위에서 아래로 떨어지는 애니메이션을 적용합니다.
            gsap.set(".btm-h", { x: 110, display: "block", opacity: 0, y: -100 }); // 초기에는 투명하고 위에서 떨어지게 설정
            gsap.to(".btm-h", {
              opacity: 1, // 투명에서 불투명으로 페이드인
              y: 0, // 위에서 아래로 떨어지는 애니메이션
              duration: 0.5, // 애니메이션 지속 시간
              onComplete: function () {
                // "btm-h" 애니메이션이 끝난 후 "btm-i"를 보이도록 설정하고 위에서 아래로 떨어지는 애니메이션을 적용합니다.
                gsap.set(".btm-i", { x: 120, display: "block", opacity: 0, y: -100 }); // 초기에는 투명하고 위에서 떨어지게 설정
                gsap.to(".btm-i", {
                  opacity: 1, // 투명에서 불투명으로 페이드인
                  y: 0, // 위에서 아래로 떨어지는 애니메이션
                  duration: 0.5, // 애니메이션 지속 시간
                  onComplete: function () {
                    // "btm-h" 애니메이션이 끝난 후 "btm-i"를 보이도록 설정하고 위에서 아래로 떨어지는 애니메이션을 적용합니다.
                    gsap.set(".btm-v", { x: 130, display: "block", opacity: 0 }); // 초기에는 투명하고 위에서 떨어지게 설정
                    gsap.to(".btm-v", {
                      opacity: 1, // 투명에서 불투명으로 페이드인
                      duration: 0.5, // 애니메이션 지속 시간
                      onComplete: function () {
                        // "btm-h" 애니메이션이 끝난 후 "btm-i"를 보이도록 설정하고 위에서 아래로 떨어지는 애니메이션을 적용합니다.
                        gsap.set(".btm-e", { x: 140, display: "block", opacity: 0 }); // 초기에는 투명하고 위에서 떨어지게 설정
                        gsap.to(".btm-e", {
                          opacity: 1, // 투명에서 불투명으로 페이드인
                          rotation: 360, // 회전 애니메이션
                          duration: 0.5, // 애니메이션 지속 시간
                        });
                      },
                    });
                  },
                });
              },
            });
          },
        });
      },
    });
  },
});

// Section 2 : right / profile-welcome
let typeSplit = new SplitType('.profile-welcome-txt', {
  types: 'lines, words, chars',
  tagName: 'span'
})

gsap.from('.profile-welcome-txt .char', {
  opacity: 0.3,
  duration: 0.25,
  ease: 'power1.out',
  stagger: 0.1,
  
})

// Section 2 : right / profile-intro-contents-star
gsap.fromTo(".profile-intro-contents-star", {
  x: 60,
  fill: 'blue',
  rotation: 0,
}, {
  x: 400,
  duration: 1.60,
  yoyo: true,
  repeat: -1, 
});

// Section 3 : left descirption / tokenpost-num
gsap.to(".sec-left-icon", {
  rotation: 360,
  duration: 2,
  repeat: -1,
  repeatDelay: 3,
  ease: 'none'
});

gsap.fromTo(".shakingeyes", {
  x: 30,
  rotation: 0,
}, {
  x: 80,
  duration: 1,
  yoyo: true,
  repeat: -1, 
});

// Section : left descirption / sec-left-arrows
gsap.to(".sec-left-arrows-txt", {
  duration: 0.3,
  y: 10,
  ease: "circ.in",
  repeat: -1,
  yoyo: true,
});



Sticker.init('.sticker');