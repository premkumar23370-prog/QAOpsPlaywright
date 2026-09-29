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
  - waiting for locator('//*[text()=\'affiliate\']')

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
            - textbox "Search here" [active] [ref=e61]: affiliate
            - link "򬂕" [ref=e62] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e63]: 򬂕
        - generic [ref=e64]:
          - generic [ref=e66]:
            - generic [ref=e67]: Standard App Custom App
            - generic [ref=e68]: Categories
            - generic [ref=e69]:
              - checkbox [ref=e70]
              - generic [ref=e71] [cursor=pointer]: "NO"
          - generic [ref=e73] [cursor=pointer]:
            - generic [ref=e78]: Affiliate
            - generic "Under Maintenance"
          - text:  򬉔 򭖁 򬑘 򬈩 򬅤 򬐨  򪀰 򪅹 򪁓 򬅦 򭞀 򪁷 򪁵 򪁶 򪀲  򪁷 򬉦 򭜃
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
  13 |     await this.application.click();
  14 |     await this.appsearch.fill(this.Appname);
  15 |     await this.page.keyboard.press('Enter')
> 16 |     await this.app.click();
     |                    ^ Error: locator.click: Test timeout of 30000ms exceeded.
  17 | }
  18 | 
  19 | }
  20 | module.exports={Designer};
```