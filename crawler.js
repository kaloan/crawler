let oldimgs = [];
let fillNum = 0;
let finished = false;
let PPP=0;
let NNN=0;

const MAX_FILL_FACTOR = 0.9;

function centerOfElem(elem)
{
  return {
    X: elem.offsetLeft + 0.5*elem.offsetWidth ,
    Y: elem.offsetTop + 0.5*elem.offsetHeight
  };
}

function imgLoaded(imgElement) {
  return imgElement.complete && imgElement.naturalHeight !== 0;
}

function checkForm()
{
  finished = false;
  fillNum = 0;

  oldimgs.forEach(item => item.remove());
  oldimgs = [];

  const baseDir = document.getElementById('basedir').value;

  let startnum = Number(document.getElementById('startnum').value);
  if(startnum == null || startnum == "") startnum = 1;
  const count = Number(document.getElementById('imgcount').value);

  const postString = document.getElementById('ext').value;

  let nextbutton;

  for(let i = startnum; i < startnum + count; i++)
  {
    finished = false;

    const imgcontainer = document.createElement('div');
    imgcontainer.classList.add("imageContainer");
    imgcontainer.id = "container" + i;

    const prevbutton = document.createElement('button');
    prevbutton.classList.add("transitionButton");
    if(oldimgs.length === 0) prevbutton.style.opacity = 0;
    prevbutton.innerHTML = "PREV";
    prevbutton.addEventListener( "click" , function ()
    {
      PPP++;
      if(oldimgs.length !== 0)
      {
        toContainer = oldimgs[this.getAttribute("data-fill")];
        if(toContainer) toContainer.scrollIntoView({block: "center"});
      }
    });
    prevbutton.setAttribute("data-fill", fillNum - 1);
    imgcontainer.appendChild(prevbutton);


    const img = document.createElement('img');
    img.id = "img" + i;
    img.src = baseDir + i + postString;

    img.onerror = function() {
        finished = true;
    };
    if(finished) continue;
    imgcontainer.appendChild(img);


    nextbutton = document.createElement('button');
    nextbutton.setAttribute("data-fill", fillNum + 1);
    nextbutton.classList.add("transitionButton");
    nextbutton.innerHTML = "NEXT";
    nextbutton.addEventListener( "click" , function ()
    {
      NNN++;
      toContainer = oldimgs[this.getAttribute("data-fill")];
      if(toContainer) toContainer.scrollIntoView({block: "center"});
    });
    imgcontainer.appendChild(nextbutton);


    document.getElementById('body').appendChild(imgcontainer);
    oldimgs.push(imgcontainer);
    fillNum++;
  }
  if(nextbutton) nextbutton.style.opacity = 0;

  oldimgs.slice(fillNum).forEach(item => item.remove());
  oldimgs.splice(fillNum);
}
