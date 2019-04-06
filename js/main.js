CSSCode =
`/*Hello,大家好，本期视频我给大家分享一下简历的家常做法*/
/*首先填加动画效果，并去掉默认内外边距*/
*{
    transition: all 0.5s;
    padding: 0;
    margin: 0;
}

/*加点颜色，改一下字体大小*/
body{
    background: #EFEFEF;
    font-size: 1.7rem;
}

#codePre{
    font-family: Helvetica;
    overflow: auto;
    padding: 20px;
    margin: 20px;
    background: #212121;
    box-shadow: 0 0 4px 4px rgba(0,0,0,0.3);
}

.token.comment{
    color: #EFEFEF;
}
/*有点暗？高亮吧！*/
.token.selector{
    color: #FFCB6B;
    font-weight: bold;
}
.token.property{
    color: #B2CCD6;
    font-weight: bold;
}
.token.punctuation{
    color: #89DDFF;
}
#codePre{
    color: #E46B3E;
}
/*差不多了，给正文让点空间*/
body{
    display: flex;
    perspective: 6000px;
}
#codeContainer{
    transform-style: preserve-3d;
}
#codePre{
    perspective-origin: left;
    transform: rotateY(20deg);
    width: 30vw;
}

#resumePre{
    background: white;
    width: 60vw;
    height: 86vh;
    box-shadow: 0 0 4px 4px rgba(0,0,0,0.3);
    padding: 40px;
    margin: 30px;
    overflow: auto;
    font-family: Helvetica;
}
/*ok,继续*/
`

HTMLCode =
`<section class="header">
    <h1>胡宇</h1>
    <p>176****3118 | galena.hu@****.com</p>
    <p>中国地质大学/应届/硕士 | 北京</p>
</section>
<section class="education">
    <h3>教育经历</h3>
    <hr>
    <dl>
        <dt>****大学</dt>
        <dd>时间</dd>
        <dt>硕士/****学院</dt>
        <dd>北京</dd>
    </dl>
    <dl>
        <dt>****大学</dt>
        <dd>时间</dd>
        <dt>学士/****学院</dt>
        <dd>长沙</dd>
    </dl>
</section>
<section class="skills">
    <h3>专业技能</h3>
    <hr>
    <p>掌握。。。熟悉。。。了解。。。</p>
</section>
<section class="projects">
    <h3>项目介绍</h3>
    <hr>
    <ol>
        <li></li>
        <li></li>
        <li></li>
    </ol>
</section>`

CSSCode2 =
`/*正文也要简洁优雅*/
section {
    margin: 40px 10px;
}
h1 {
    font-size: 40px;
}
h3, hr {
   margin-bottom: -20px;
}

.header {
    text-align: center;
}
.header p {
    margin-bottom: -20px;
}
.education dl {
    display: flex;
    flex-wrap: wrap;
}
.education dl dd {
    width: 20%;
    text-align: right;
    font-style: italic;
}
.education dl dt {
    width: 78%;
}
.education dl dt:nth-child(1) {
    font-weight: bold;
}
li {
    margin-left: 40px;
}
/*差不多就这样了，谢谢观看，我们下次再见*/`

function writeCode(pretext, text, fn) {
    let i = 0
    let time = setInterval(() => {
        i = i + 1
        codePre.innerHTML = text.substring(0, i)
        codePre.innerHTML = Prism.highlight(pretext + codePre.innerHTML, Prism.languages.css, 'css');
        styleTag.innerHTML = pretext + text.substring(0, i)
        codePre.scrollTop = codePre.scrollHeight;
        if (i >= text.length) {
            window.clearInterval(time);
            fn && fn.call();
        }
    }, 50)

}

function writeResume(text, fn) {
	let i = 0
	var newText=text.replace(/[\r\n]/g,"");
    let time = setInterval(() => {
        i = i + 1
        resumePre.innerHTML = newText.substring(0, i)
        if (i >= newText.length) {
            window.clearInterval(time);
            console.log(newText)
            fn && fn.call();

        }
    }, 50)
}

writeCode('', CSSCode, () => {
	writeResume(HTMLCode, () => {
		writeCode(CSSCode, CSSCode2, () => {
			console.log('done')
		})
	})
})


