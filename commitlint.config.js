module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // Yeni özellik
        'fix', // Hata düzeltmesi
        'docs', // Dokümantasyon değişiklikleri
        'style', // Kod stili değişiklikleri (white-space, formatting, vb.)
        'refactor', // Kod refactoring
        'perf', // Performans iyileştirmeleri
        'test', // Test ekleme veya güncelleme
        'chore', // Yapılandırma değişiklikleri
        'ci', // CI/CD ile ilgili değişiklikler
        'build', // Build sistemi değişiklikleri
        'revert', // Bir önceki commit'e dönüş
      ],
    ],
    'type-case': [2, 'always', 'lowerCase'],
    'type-empty': [2, 'never'],
    'scope-case': [2, 'always', 'lowerCase'],
    'subject-case': [2, 'never', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'body-leading-blank': [2, 'always'],
    'footer-leading-blank': [2, 'always'],
  },
};
