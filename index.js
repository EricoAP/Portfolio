const switchTheme = () => {

  const rootElem = document.documentElement
  let dataTheme = rootElem.getAttribute('data-theme'), newTheme

  newTheme = (dataTheme === 'light') ? 'dark' : 'light'

  rootElem.setAttribute('data-theme', newTheme)

  localStorage.setItem('theme', newTheme)
}

document.querySelector('#theme-switcher').addEventListener('click', switchTheme)


const downloadButton = document.getElementById('downloadButton');

downloadButton.addEventListener('click', () => {
  const fileName = 'Érico Amorim Pedrosa_CV.pdf';
  const fileURL = 'Érico Amorim Pedrosa_CV.pdf';

  const link = document.createElement('a');
  link.href = fileURL;
  link.download = fileName;
  link.click();
});


const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab=>{
    tab.addEventListener('click', () =>{
      const target = document.querySelector(tab.dataset.target)

      tabContents.forEach(tabContent =>{
        tabContent.classList.remove('qualification__active')
      })
      target.classList.add('qualification__active')

      tabs.forEach(tab=>{
        tab.classList.remove('qualification__active')
      })
      tab.classList.add('qualification__active')
    })  
  })
