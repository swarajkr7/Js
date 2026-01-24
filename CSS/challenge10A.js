function  istoggle(cl){
                let button=document.querySelector(`.${cl}`);
                
                if(button.classList.contains('is-toggled')){
                    button.classList.remove('is-toggled')

                }else if (cl==='game'){
                     button.classList.add('is-toggled')
                     document.querySelector('.music').classList.remove('is-toggled')
                     document.querySelector('.tech').classList.remove('is-toggled')

                }else if (cl==='music'){
                     button.classList.add('is-toggled')
                     document.querySelector('.game').classList.remove('is-toggled')
                     document.querySelector('.tech').classList.remove('is-toggled')

                }else if (cl==='tech'){
                     button.classList.add('is-toggled')
                     document.querySelector('.game').classList.remove('is-toggled')
                     document.querySelector('.music').classList.remove('is-toggled')

                }
                   
                }
            