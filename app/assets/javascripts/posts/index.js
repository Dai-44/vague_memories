document.addEventListener('DOMContentLoaded', function() {
  // 投稿一覧画面でフワッと消えるアニメーションを実行
  applyFuzzyTextAnimation('.fuzzy-text');
});

function applyFuzzyTextAnimation(selector) {
  var fuzzyTexts = document.querySelectorAll(selector);
  fuzzyTexts.forEach(function(fuzzyText) {
    var originalText = fuzzyText.textContent;
    var modifiedText = createModifiedText(originalText);

    // ランダムな位置を保存
    var randomIndex = getAndSetRandomIndex(fuzzyText);

    // ページロード後、0.1秒後に差し替える文字列を適用
    setTimeout(function() {
      fuzzyText.textContent = modifiedText;
    }, 100); // 0.1秒後にアニメーションを実行
  });
}

function createModifiedText(text) {
  var modifiedText = '';
  for (var i = 0; i < text.length; i++) {
    var random = Math.random();
    if (random < 0.5) { // 50%の確率で非表示にする
      modifiedText += ' ';
    } else {
      modifiedText += text[i];
    }
  }
  return modifiedText;
}

function getAndSetRandomIndex(fuzzyText) {
  // ランダムな位置を取得
  var randomIndex = Math.floor(Math.random() * fuzzyText.textContent.length);

  // 取得したランダムな位置をdata属性にセット
  fuzzyText.dataset.randomIndex = randomIndex;

  return randomIndex;
}
