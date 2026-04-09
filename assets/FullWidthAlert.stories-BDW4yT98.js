import{ax as a,r as i,j as r}from"./iframe-FDH2xSLc.js";import{S as c}from"./SynapseNavDrawer-knfApEa1.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-_hHZId_n.js";import"./useInfiniteQuery-B-tinRUO.js";import"./useDownloadList-BLUYvloH.js";import"./waitForAsyncResult-DsZbn-bA.js";import"./useUserBundle-C0iPIx3M.js";import"./CreateProjectModal-foNfmM9K.js";import"./ConfirmationDialog-D1K99bC1.js";import"./DialogBase-ukX_Dfis.js";import"./Close-DbaBw_Hg.js";import"./HelpPopover-CeMxTcbY.js";import"./MarkdownPopover-BINzzL9F.js";import"./LightTooltip-BxuR9X41.js";import"./MarkdownSynapse-DubjqhF7.js";import"./SkeletonButton-xYbyYL9k.js";import"./SkeletonInlineBlock-CrGk-deJ.js";import"./SkeletonTable-BfwZdIL6.js";import"./SkeletonParagraph-BniWr4_C.js";import"./SynapseHomepageNavBar-CTcsykj-.js";import"./SageResourcesPopover-BaUUs5Fx.js";import"./Grid-DJnNU4pw.js";import"./index-CzuvZxX2.js";import"./MenuItem-Cv9z9awV.js";import"./UserBadge-BTH9G2vn.js";import"./useUserGroupHeader-DQ8vb17b.js";import"./Card-Cp-G3rzT.js";import"./Chip-CzpLZLiP.js";import"./searchDefaults-BaWN6OBZ.js";import"./Slide-BJVA_wUa.js";import"./InputAdornment-DibahqLi.js";import"./listItemButtonClasses-CECdSMaA.js";import"./Badge-BIe3ulVI.js";import"./usePreviousProps-DMYUt7tk.js";const q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    show: true,
    title: 'Package has been downloaded',
    description: 'The files contained in this zip file have been removed from your list.',
    isGlobal: false
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    show: true,
    title: 'Success',
    description: 'Lorem ipsum dolor sit amet',
    primaryButtonConfig: {
      text: 'Accept and Continue',
      onClick: () => alert('Accepted')
    },
    isGlobal: true,
    onClose: undefined
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...SuccessAlertWithPrimaryButtonOnly.args
  },
  render: args => <>
      <SynapseNavDrawer initIsOpen={false} gotoPlace={(href: string) => {
      window.alert(\`Nav bar calling back to change route to \${href}\`);
    }} />
      <FullWidthAlert {...args} />
    </>,
  decorators: [Story => {
    useEffect(() => {
      // SWC applies this class when SynapseNavDrawer is visible
      document.body.classList.add('SynapseNavDrawerIsShowing');
      return () => {
        // ...and removes it when SynapseNavDrawer is not visible
        document.body.classList.remove('SynapseNavDrawerIsShowing');
      };
    }, []);
    return <Story />;
  }]
}`,...o.parameters?.docs?.source}}};const H=["DownloadListPackageCreation","SuccessAlertWithPrimaryButtonOnly","SynapseNavDrawerIsShowing"];export{t as DownloadListPackageCreation,e as SuccessAlertWithPrimaryButtonOnly,o as SynapseNavDrawerIsShowing,H as __namedExportsOrder,q as default};
