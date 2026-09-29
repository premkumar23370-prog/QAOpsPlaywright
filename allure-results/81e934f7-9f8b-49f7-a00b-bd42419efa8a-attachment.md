# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: UIbasic.spec.js >> Login >> Designer
- Location: tests\UIbasic.spec.js:20:11

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('#cs_switchmenu')

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - generic [ref=e4]:
      - generic [ref=e7]:
        - img [ref=e9]
        - heading "Build, Deploy, and Scale Applications with Ease." [level=2] [ref=e10]
        - paragraph [ref=e11]: Building the Application.
        - list [ref=e12]:
          - listitem [ref=e13]: 7000+ templates to effortlessly integrate with applications.
          - listitem [ref=e14]: RAD framework for swift app creation in minutes.
          - listitem [ref=e15]: No-code, security, and scalability for modern solutions.
        - link "Learn more" [ref=e16] [cursor=pointer]:
          - /url: https://www.chainsys.com/smart-app-builder
      - generic [ref=e19]:
        - img [ref=e21]
        - heading "Achieve enterprise-wide data governance and quality." [level=2] [ref=e22]
        - paragraph [ref=e23]: Filters the data in efficent way.
        - list [ref=e24]:
          - listitem [ref=e25]: Helping you quickly and effectively improve data quality.
          - listitem [ref=e26]: 70% of execs delay decisions due to data unavailability or quality.
          - listitem [ref=e27]: 50% of orgs say they can do more in data security and GRC.
        - link "Learn more" [ref=e28] [cursor=pointer]:
          - /url: https://www.chainsys.com/datazap
      - generic [ref=e31]:
        - img [ref=e33]
        - heading "Deliver Impact Through Data Mastery." [level=2] [ref=e34]
        - paragraph [ref=e35]: Analytics, Security, Cataloging & Data Science in Blink of an AI.
        - list [ref=e36]:
          - listitem [ref=e37]: 3000+ Visualization & Analytics Templates.
          - listitem [ref=e38]: 10,000+ pre-built templates for major Enterprise Applications.
          - listitem [ref=e39]: Ensure top-notch data in your data lake.
        - link "Learn more" [ref=e40] [cursor=pointer]:
          - /url: https://www.chainsys.com/datazense
      - generic [ref=e43]:
        - img [ref=e45]
        - heading "Your Data, Your Rules." [level=2] [ref=e46]
        - paragraph [ref=e47]: Filters the data in efficent way
        - list [ref=e48]:
          - listitem [ref=e49]: Swift Execution of Data Quality Strategies.
          - listitem [ref=e50]: Realize Data Consciousness.
          - listitem [ref=e51]: Built-in Data Quality Platform.
        - link "Learn more" [ref=e52] [cursor=pointer]:
          - /url: https://www.chainsys.com/datazen
      - generic [ref=e55]:
        - img [ref=e57]
        - heading "Unleashing Next-Gen Automation Power." [level=2] [ref=e58]
        - paragraph [ref=e59]: Accelerate Automation, Ensure Quality, and Boost Productivity.
        - list [ref=e60]:
          - listitem [ref=e61]: Optimize operations with seamless automation.
          - listitem [ref=e62]: Adapt and automate with unmatched flexibility.
          - listitem [ref=e63]: Accelerate processes with instant playbacks.
        - link "Learn more" [ref=e64] [cursor=pointer]:
          - /url: https://www.chainsys.com/smart-bots
    - list [ref=e65]:
      - listitem [ref=e66]
      - listitem [ref=e67]
      - listitem [ref=e68]
      - listitem [ref=e70]
      - listitem [ref=e71]
  - generic [ref=e72]:
    - img "Chain-sys platform" [ref=e74]
    - generic [ref=e76]:
      - heading "Sign in to Smart Data Platform" [level=2] [ref=e77]
      - generic [ref=e78]: Username
      - textbox "Username" [active] [ref=e79]
      - generic [ref=e80]: Password
      - generic [ref=e81]:
        - textbox "Password" [ref=e82]
        - emphasis [ref=e83] [cursor=pointer]: 򬄹
        - text: 򬅁
      - link "Forgot password?" [ref=e85] [cursor=pointer]:
        - /url: "#"
      - generic "Login" [ref=e86] [cursor=pointer]: Sign in
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
> 12 |     await this.switchmenu.click();
     |                           ^ Error: locator.click: Test timeout of 60000ms exceeded.
  13 |     await this.application.click();
  14 |     await this.appsearch.fill(this.Appname);
  15 |     await this.page.keyboard.press('Enter')
  16 |     await this.app.click();
  17 | }
  18 | 
  19 | }
  20 | module.exports={Designer};
```