import{h as a,b as t}from"./iframe-_RRtoCIB.js";import{V as s}from"./ValidationRequirement-BG7hCA9n.js";import"./index-Chi_LkuB.js";import"./useUserBundle-B0qXkO2d.js";import"./useSuspenseQuery-IQfUTR9I.js";import"./RequirementItem-BKQRp7Kc.js";import"./LockTwoTone-CbDMt6Yk.js";const c={title:"Governance/Data Access Request Flow/Requirements/ValidationRequirement",component:s,parameters:{stack:"mock"}},e={parameters:{msw:{handlers:[a(t,!0,!0)]}}},r={parameters:{msw:{handlers:[a(t,!0,!1)]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [getCurrentUserCertifiedValidatedHandler(MOCK_REPO_ORIGIN, true, true)]
    }
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [getCurrentUserCertifiedValidatedHandler(MOCK_REPO_ORIGIN, true, false)]
    }
  }
}`,...r.parameters?.docs?.source}}};const u=["Validated","NotValidated"];export{r as NotValidated,e as Validated,u as __namedExportsOrder,c as default};
