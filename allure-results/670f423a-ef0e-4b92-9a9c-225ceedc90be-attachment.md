# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: UIbasic.spec.js >> Login >> Designer
- Location: tests\UIbasic.spec.js:20:11

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#cs_application')
    - locator resolved to <div id="cs_application" class="cs-inline cs-lmar cs-mg-tab-each cs-mg-tab-app">…</div>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not stable
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not stable
    - retrying click action
      - waiting 100ms

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - banner [ref=e4]:
    - banner [ref=e5]:
      - generic [ref=e6]:
        - generic [ref=e7] [cursor=pointer]:
          - img "menu" [ref=e8]
          - text: 
        - link "Logo" [ref=e9] [cursor=pointer]:
          - /url: "#"
          - img "Logo" [ref=e11]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - generic [ref=e14]:
            - link "premkumar.s@releaseqa.com" [ref=e16] [cursor=pointer]:
              - /url: javascript:void(0)
              - img "premkumar.s@releaseqa.com" [ref=e17]
            - img [ref=e19] [cursor=pointer]
          - text: 򬀉
        - text: 
        - listitem [ref=e20]:
          - img "Aari" [ref=e22] [cursor=pointer]
        - listitem [ref=e23]:
          - generic "Chat Assistance" [ref=e24] [cursor=pointer]:
            - generic [ref=e25]: 򭝉
        - listitem [ref=e26]:
          - link "򬐕" [ref=e27] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=e28]:
          - link "򭝉" [ref=e29] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e30]: 򭝉
        - listitem [ref=e31]:
          - link "򬐸" [ref=e32] [cursor=pointer]:
            - /url: https://docs.chainsys.com
            - generic [ref=e33]: 򬐸
        - listitem [ref=e34]:
          - link "򬉆 1" [ref=e35] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e36]: 򬉆
            - generic [ref=e37]: "1"
          - generic:
            - list
            - generic:
              - generic: 򬐖
              - generic: No new notifications..
              - generic: Show Old Notifications
      - text: 򬂕 NO
  - main [ref=e38]:
    - complementary [ref=e39]:
      - navigation [ref=e40]:
        - generic [ref=e41]:
          - generic [ref=e42]:
            - img [ref=e44]
            - generic [ref=e46]:
              - generic [ref=e47]: Version
              - generic [ref=e48]: 26.Q3.081
          - generic [ref=e50]:
            - generic [ref=e51] [cursor=pointer]:
              - generic [ref=e53]: 򬀒
              - generic [ref=e54]: Menu
            - generic [ref=e55] [cursor=pointer]:
              - generic [ref=e57]: 򪀴
              - generic [ref=e58]: Application
          - generic [ref=e60]:
            - textbox "Search here" [ref=e61]
            - link "򬂕" [ref=e62] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e63]: 򬂕
        - generic [ref=e64]:
          - text: "NO"
          - generic [ref=e65]:
            - list:
              - listitem [ref=e66] [cursor=pointer]:
                - generic [ref=e67]:
                  - heading " Workbench" [level=4] [ref=e68]:
                    - generic [ref=e70]: 
                    - generic [ref=e71]: Workbench
                  - list [ref=e72]:
                    - listitem [ref=e73]:
                      - generic [ref=e75]: 򬉔
                      - generic [ref=e76]: Translator
                    - listitem [ref=e77]:
                      - generic [ref=e79]: 򭖁
                      - generic [ref=e80]: Field Audit
                    - listitem [ref=e81]:
                      - generic [ref=e83]: 򬑘
                      - generic [ref=e84]: Email
                    - listitem [ref=e85]:
                      - generic [ref=e87]: 򬈩
                      - generic [ref=e88]: Status Workflow
                    - listitem [ref=e89]:
                      - generic [ref=e91]: 򬅤
                      - generic [ref=e92]: File Manage
                    - listitem [ref=e93]:
                      - generic [ref=e95]: 򬐨
                      - generic [ref=e96]: Geo Location
              - listitem [ref=e97] [cursor=pointer]:
                - generic [ref=e98]:
                  - heading " Notifications" [level=4] [ref=e99]:
                    - generic [ref=e101]: 
                    - generic [ref=e102]: Notifications
                  - list [ref=e103]:
                    - listitem [ref=e104]:
                      - generic [ref=e105]: Google Chat Queue
                    - listitem [ref=e106]:
                      - generic [ref=e107]: Google Chat Workbench
                    - listitem [ref=e108]:
                      - generic [ref=e109]: WhatsApp Template
              - listitem [ref=e110] [cursor=pointer]:
                - generic [ref=e111]:
                  - heading "򪀰 Action Hub" [level=4] [ref=e112]:
                    - generic [ref=e114]: 򪀰
                    - generic [ref=e115]: Action Hub
                  - list [ref=e116]:
                    - listitem [ref=e117]:
                      - generic [ref=e119]: 򪅹
                      - generic [ref=e120]: Runbook
                    - listitem [ref=e121]:
                      - generic [ref=e123]: 򪁓
                      - generic [ref=e124]: Code Changes Workbench
                    - listitem [ref=e125]:
                      - generic [ref=e127]: 򬅦
                      - generic [ref=e128]: Code Migration Workbench
                    - listitem [ref=e129]:
                      - generic [ref=e131]: 򭞀
                      - generic [ref=e132]: Metadata Delete
              - listitem [ref=e133] [cursor=pointer]:
                - generic [ref=e134]:
                  - heading "򪁷 Application" [level=4] [ref=e135]:
                    - generic [ref=e137]: 򪁷
                    - generic [ref=e138]: Application
                  - list
              - listitem [ref=e139] [cursor=pointer]:
                - generic [ref=e140]:
                  - heading "򪁵 Object" [level=4] [ref=e141]:
                    - generic [ref=e143]: 򪁵
                    - generic [ref=e144]: Object
                  - list
              - listitem [ref=e145] [cursor=pointer]:
                - generic [ref=e146]:
                  - heading "򪁶 Layout" [level=4] [ref=e147]:
                    - generic [ref=e149]: 򪁶
                    - generic [ref=e150]: Layout
                  - list
              - listitem [ref=e151] [cursor=pointer]:
                - generic [ref=e152]:
                  - heading "򪀲 Inbound/Outbound" [level=4] [ref=e153]:
                    - generic [ref=e155]: 򪀲
                    - generic [ref=e156]: Inbound/Outbound
                  - list
              - listitem [ref=e157] [cursor=pointer]:
                - generic [ref=e158]:
                  - heading " appM" [level=4] [ref=e159]:
                    - generic [ref=e161]: 
                    - generic [ref=e162]: appM
                  - list
              - listitem [ref=e163] [cursor=pointer]:
                - generic [ref=e164]:
                  - heading "򪁷 Process Engine" [level=4] [ref=e165]:
                    - generic [ref=e167]: 򪁷
                    - generic [ref=e168]: Process Engine
                  - list [ref=e169]:
                    - listitem [ref=e170]:
                      - generic [ref=e172]: 򬉦
                      - generic [ref=e173]: Deployment
                    - listitem [ref=e174]:
                      - generic [ref=e176]: 򭜃
                      - generic [ref=e177]: Autonomous
```

# Test source

```ts
  1  |  class Designer{
  2  | constructor(page,Appname){
  3  |     this.page=page;
  4  |     this.Appname=Appname;
  5  |     this.switchmenu= page.locator('#cs_switchmenu');
  6  |     this.application=page.locator('#cs_application');
  7  |     this.appsearch=page.locator('#cs_menusearch');
  8  |     this.app=page.locator(`//*[text()='${Appname}']`)
  9  |    
  10 | }
  11 | async designerAppSearch(){
  12 |     await this.switchmenu.click();
> 13 |     await this.application.click();
     |                            ^ Error: locator.click: Test timeout of 30000ms exceeded.
  14 |     await this.appsearch.fill(this.Appname);
  15 |     await this.page.keyboard.press('Enter')
  16 |     await this.app.click();
  17 | }
  18 | 
  19 | }
  20 | module.exports={Designer};
```