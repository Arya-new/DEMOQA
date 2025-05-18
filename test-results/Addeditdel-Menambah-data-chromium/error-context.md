# Test info

- Name: Menambah data
- Location: D:\Documents\DEMOQA\tests\Addeditdel.spec.js:6:6

# Error details

```
Error: browserContext._wrapApiCall: Test ended.
Browser logs:

<launching> C:\Users\user\AppData\Local\ms-playwright\chromium-1169\chrome-win\chrome.exe --disable-field-trial-config --disable-background-networking --disable-background-timer-throttling --disable-backgrounding-occluded-windows --disable-back-forward-cache --disable-breakpad --disable-client-side-phishing-detection --disable-component-extensions-with-background-pages --disable-component-update --no-default-browser-check --disable-default-apps --disable-dev-shm-usage --disable-extensions --disable-features=AcceptCHFrame,AutoExpandDetailsElement,AvoidUnnecessaryBeforeUnloadCheckSync,CertificateTransparencyComponentUpdater,DeferRendererTasksAfterInput,DestroyProfileOnBrowserClose,DialMediaRouteProvider,ExtensionManifestV2Disabled,GlobalMediaControls,HttpsUpgrades,ImprovedCookieControls,LazyFrameLoading,LensOverlay,MediaRouter,PaintHolding,ThirdPartyStoragePartitioning,Translate --allow-pre-commit-input --disable-hang-monitor --disable-ipc-flooding-protection --disable-popup-blocking --disable-prompt-on-repost --disable-renderer-backgrounding --force-color-profile=srgb --metrics-recording-only --no-first-run --enable-automation --password-store=basic --use-mock-keychain --no-service-autorun --export-tagged-pdf --disable-search-engine-choice-screen --unsafely-disable-devtools-self-xss-warnings --no-sandbox --user-data-dir=C:\Users\user\AppData\Local\Temp\playwright_chromiumdev_profile-XXXXXXjfQ003 --remote-debugging-pipe --no-startup-window
<launched> pid=1308
[pid=1308] <gracefully close start>
```

# Test source

```ts
   1 | import { test, expect, firefox } from '@playwright/test'
   2 | import { Addeditdel } from '../POM/Addeditdel'  
   3 | import { Data1, Data2,Data3 } from '../Data/AddData'
   4 | import { Edit1, Edit2, Edit3 } from '../Data/EditData'
   5 |   
>  6 | test.only('Menambah data', async({page}) => {
     |      ^ Error: browserContext._wrapApiCall: Test ended.
   7 |   const tamditpus = new Addeditdel(page)
   8 |   await page.goto('https://demoqa.com/webtables', {timeout: 60000, waitUntil: 'domcontentloaded'})
   9 |   await tamditpus.Tambah(Data1)
  10 |   await tamditpus.Tambah(Data2)
  11 |   await tamditpus.Tambah(Data3)
  12 |   await tamditpus.Edit(4, {firstname: 'Arya', email: 'aryaramadhan@gmail.com'})
  13 |   await tamditpus.Edit(5, Edit2)
  14 |   await tamditpus.Edit(6, Edit3)
  15 |   await tamditpus.Hapus()
  16 |   await page.pause()
  17 |   }
  18 | )
  19 |
```