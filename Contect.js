function Copy(CopyNumber)
{
var CopyText = document.createRange();

CopyText.selectNode(document.getElementById(CopyNumber));
CopyText.selectNode(document.getElementById(CopyNumber));
window.getSelection().removeAllRanges();
window.getSelection().addRange(CopyText);
window.getSelection().removeAllRanges();
alert("Copied the text: " + CopyText );

}

function Copy(CopyEmail)
{
var CopyText = document.createRange();

CopyText.selectNode(document.getElementById(CopyEmail));
CopyText.selectNode(document.getElementById(CopyEmail));
window.getSelection().removeAllRanges();
window.getSelection().addRange(CopyText);
window.getSelection().removeAllRanges();
alert("Copied the text: " + CopyText );

}
