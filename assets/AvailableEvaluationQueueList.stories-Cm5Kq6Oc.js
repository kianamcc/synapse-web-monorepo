import{ix as t,iy as i,iz as l,j as r,X as m}from"./iframe-BB1CyglU.js";import{A as u}from"./AvailableEvaluationQueueList-CrRku3W7.js";import"./index-Chi_LkuB.js";import"./LightTooltip-B9cGyM6Q.js";import"./MarkdownSynapse-Bp46o5vr.js";import"./SkeletonButton-q-Dp6RFE.js";import"./SkeletonInlineBlock-dhIvV08s.js";import"./SkeletonTable-EsMLBsV_.js";import"./SkeletonParagraph-CfPPR8eC.js";import"./Autocomplete-CYtlEtNG.js";import"./usePreviousProps-ZC0xOhlJ.js";import"./Chip-CF5f4rXb.js";import"./MenuItem-ChUmjrmC.js";import"./ListItem-DGHGKA8G.js";import"./listItemButtonClasses-Bn9ypA_r.js";const{fn:c}=__STORYBOOK_MODULE_TEST__,j={title:"Synapse/Challenge/AvailableEvaluationQueueList",component:u,decorators:[n=>r.jsx(m,{sx:{maxWidth:"600px"},children:r.jsx(n,{})})],args:{onChangeSelectedEvaluation:c()}},a={args:{evaluations:[]}},p="*markdown* given to the **component**",e={args:{evaluations:[{...i,submissionInstructionsMessage:p}]}},s={args:{evaluations:l}},o={args:{evaluations:t}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    evaluations: []
  }
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    evaluations: [{
      ...mockEvaluationQueue,
      submissionInstructionsMessage: markdownText
    }]
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    evaluations: sevenGeneratedEvaulations
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    evaluations: generatedEvaulations
  }
}`,...o.parameters?.docs?.source}}};const y=["NoneAvailable","OneAvailable","SevenAvailable","ManyAvailable"];export{o as ManyAvailable,a as NoneAvailable,e as OneAvailable,s as SevenAvailable,y as __namedExportsOrder,j as default};
