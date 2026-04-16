import{ax as a,r as i,j as r}from"./iframe-BzzjdWy2.js";import{S as c}from"./SynapseNavDrawer-Dmu_-Bok.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-lT9R_VFC.js";import"./useInfiniteQuery-BbfstQUl.js";import"./useDownloadList-B9AQSFR1.js";import"./waitForAsyncResult-DK-s6NML.js";import"./useUserBundle-pMV1EYk7.js";import"./CreateProjectModal-B2yUDQLh.js";import"./ConfirmationDialog--Me4EPSq.js";import"./DialogBase-CGfYT4BU.js";import"./Close-D2aGDGHY.js";import"./HelpPopover-BVPs66Bt.js";import"./MarkdownPopover-BIgmn6Ru.js";import"./LightTooltip-BMWg9unl.js";import"./MarkdownSynapse-17VbQenC.js";import"./SkeletonButton-BhLIT0JK.js";import"./SkeletonInlineBlock-DNuGrhmv.js";import"./SkeletonTable-CsxmarD8.js";import"./SkeletonParagraph-BgDI2leK.js";import"./RadioGroup-C-3ri_f5.js";import"./Radio-BgaAjC40.js";import"./SwitchBase-Cgw9rMrL.js";import"./FormGroup-Ddg1rAuQ.js";import"./FormControlLabel-CPkZMGo3.js";import"./Chip-NSHEYu7d.js";import"./SynapseHomepageNavBar-C_UVvcVA.js";import"./SageResourcesPopover-DOFfKWYG.js";import"./Grid-Cam_jVY-.js";import"./index-1bES-Dua.js";import"./MenuItem-BVsCkoVz.js";import"./UserBadge-BqcxjeKR.js";import"./useUserGroupHeader-D1PoIV88.js";import"./Card-DdtvDXS4.js";import"./searchDefaults-BxFue2BJ.js";import"./Slide-pLpQqUhe.js";import"./InputAdornment-BRJxiA-5.js";import"./listItemButtonClasses-BlMug59m.js";import"./Badge-DBgMHilr.js";import"./usePreviousProps-CKXyB07W.js";const Q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const V=["DownloadListPackageCreation","SuccessAlertWithPrimaryButtonOnly","SynapseNavDrawerIsShowing"];export{t as DownloadListPackageCreation,e as SuccessAlertWithPrimaryButtonOnly,o as SynapseNavDrawerIsShowing,V as __namedExportsOrder,Q as default};
