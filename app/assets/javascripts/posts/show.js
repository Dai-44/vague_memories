window.onload = function() {
  // 投稿詳細画面でフワッと消えるアニメーションを実行
  applyFuzzyTextAnimation('.fuzzy-text');
};

function applyFuzzyTextAnimation(selector) {
  var fuzzyTexts = document.querySelectorAll(selector);
  fuzzyTexts.forEach(function(fuzzyText) {
    var originalText = fuzzyText.textContent;
    var randomIndex = parseInt(fuzzyText.dataset.randomIndex, 10); // 保存したランダムな位置を取得

    // ページロード後、0.1秒後に差し替える文字列を適用
    setTimeout(function() {
      // ランダムな位置を再現して差し替える
      var modifiedText = createModifiedText(originalText, randomIndex);
      fuzzyText.textContent = modifiedText;
    }, 100); // 0.1秒後にアニメーションを実行
  });
}

function createModifiedText(text, randomIndex) {
  var modifiedText = '';
  for (var i = 0; i < text.length; i++) {
    var random = Math.random();
    if (random < 0.6) { // 50%の確率で非表示にする
      modifiedText += ' ';
    } else {
      modifiedText += text[i];
    }
  }
  return modifiedText;
}
