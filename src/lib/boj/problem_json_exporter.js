// ==UserScript==
// @name            BOJ problem json exporter
// @description     BOJ problem json exporter
// @version         1.0.0.0
// @include         *acmicpc.net/problem/*
// @run-at          document-start
// ==/UserScript==

console.log('BOJ problem json exporter loaded');

document.addEventListener('DOMContentLoaded', () => {
  const data = {
    id: +document.querySelector('meta[name="problem-id"]').content,
    title: document.querySelector('#problem_title').processHTML(),
    description: document.querySelector('#problem_description').processHTML(),
    tier: +document.querySelector('.page-header img').src.match(/([0-9]+)\.svg/)[1],
    input: document.querySelector('#problem_input')?.processHTML(),
    output: document.querySelector('#problem_output')?.processHTML(),
    limit: document.querySelector('#problem_limit')?.processHTML(),
    sample: [...document.querySelectorAll('.sampledata')].map((e) => e.innerHTML).chunk(2),
    tags: document.querySelector('#problem_tags')?.innerText.split('\n').slice(1)
  };
  const result = JSON.stringify(data);
  console.log(data, result);

  const titleBtn = document.querySelector('#problem_title');
  titleBtn.classList.add('btn');
  titleBtn.classList.add('btn-primary');
  titleBtn.onclick = async () => {
    const linkElement = document.createElement('a');
    linkElement.setAttribute(
      'href',
      `data:application/json;charset=utf-8,${encodeURIComponent(result)}`
    );
    linkElement.setAttribute('download', `${data.id}.json`);
    linkElement.click();
  };
  //titleBtn.click();
  //window.open('','_self').close();
});

Array.prototype.chunk = function (size) {
  return this.length > size ? [this.slice(0, size), ...this.chunk(this.slice(size), size)] : [this];
};

HTMLElement.prototype.processHTML = function () {
  return this.innerHTML
    .trim()
    .replaceAll(/<!--[\s\S]*?-->/g, '')
    .replaceAll('src="/', 'src="https://www.acmicpc.net/');
};
