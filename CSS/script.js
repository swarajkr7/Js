function  istoggle(cl){
                console.log(cl);
                let button=document.querySelector(`.${cl}`);
                if(button.classList.contains('is-toggled')){
                    button.classList.remove('is-toggled')

                }else{
                    button.classList.add('is-toggled')
                }
            }