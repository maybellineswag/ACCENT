const fs = require('fs');
const path = require('path');

const locales = ['en', 'cs', 'ru', 'uk'];
const baseDir = '/Volumes/Mezzanine/ACCENT-AGENCY-SITE copyX/public/translations';

function getKeys(obj, prefix = '') {
    let keys = [];
    for (let key in obj) {
        const fullKey = prefix ? `${prefix}.${key}` : key;
        if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
            keys = keys.concat(getKeys(obj[key], fullKey));
        } else {
            keys.push(fullKey);
        }
    }
    return keys;
}

const translations = {};
locales.forEach(lang => {
    const filePath = path.join(baseDir, `${lang}.json`);
    translations[lang] = JSON.parse(fs.readFileSync(filePath, 'utf8'));
});

const enKeys = getKeys(translations['en']);
console.log(`Master (EN) has ${enKeys.length} keys.\n`);

locales.filter(l => l !== 'en').forEach(lang => {
    const langKeys = getKeys(translations[lang]);
    const missing = enKeys.filter(k => !langKeys.includes(k));
    const extra = langKeys.filter(k => !enKeys.includes(k));

    console.log(`--- Audit for ${lang.toUpperCase()} ---`);
    if (missing.length === 0) {
        console.log(`✅ No missing keys.`);
    } else {
        console.log(`❌ Missing ${missing.length} keys:`);
        missing.forEach(k => console.log(`  - ${k}`));
    }

    if (extra.length > 0) {
        console.log(`⚠️ Extra keys (not in EN):`);
        extra.forEach(k => console.log(`  - ${k}`));
    }
    console.log('');
});
