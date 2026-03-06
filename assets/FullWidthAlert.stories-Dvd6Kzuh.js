import{az as a,j as r,r as i}from"./iframe-BMgfrXfb.js";import{S as c}from"./SynapseNavDrawer-uOvn-uj8.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-D3ADPJZt.js";import"./useInfiniteQuery-Cbz01EgT.js";import"./useDownloadList-BLTGOWyA.js";import"./waitForAsyncResult-BVYd2o_V.js";import"./useUserBundle-DHT6W9rd.js";import"./CreateProjectModal-C37vPy9u.js";import"./ConfirmationDialog-7Z8noB4Y.js";import"./DialogBase-D4iV4KIR.js";import"./Close-DhPVL8HB.js";import"./HelpPopover-B6gX6EfQ.js";import"./MarkdownPopover-B7JHaicc.js";import"./LightTooltip-DXrinBip.js";import"./MarkdownSynapse-CazEVfAQ.js";import"./SkeletonButton-D7PyYMMO.js";import"./SkeletonInlineBlock-DrHJKgo1.js";import"./SkeletonTable-DhKHQ1GZ.js";import"./SkeletonParagraph-B8T8hjnS.js";import"./SynapseHomepageNavBar-BATQZ0Mx.js";import"./SageResourcesPopover-BOIIKuh1.js";import"./Grid-DXNyDVQM.js";import"./index-DVKuYuST.js";import"./MenuItem-Dxe8Sczu.js";import"./UserBadge-AJCe_aZw.js";import"./Card-D0xZuJv-.js";import"./Chip-Bg1Tm2ZJ.js";import"./searchDefaults-B1NykfDW.js";import"./Slide-uj0HpqKI.js";import"./InputAdornment-CKXto2Zn.js";import"./listItemButtonClasses-C_WS2KLX.js";import"./Badge-BKf-MfgQ.js";import"./usePreviousProps-Gb-wbx9E.js";const U={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const q=["DownloadListPackageCreation","SuccessAlertWithPrimaryButtonOnly","SynapseNavDrawerIsShowing"];export{t as DownloadListPackageCreation,e as SuccessAlertWithPrimaryButtonOnly,o as SynapseNavDrawerIsShowing,q as __namedExportsOrder,U as default};
