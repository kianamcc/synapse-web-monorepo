import{ax as a,r as i,j as r}from"./iframe-BoShs1FP.js";import{S as c}from"./SynapseNavDrawer-ZmEHnqZu.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-BKlGVEYR.js";import"./useInfiniteQuery-CWe3h_-o.js";import"./useDownloadList-Z6WzXSTr.js";import"./waitForAsyncResult-BTKQ29Of.js";import"./useUserBundle-eEwiRblB.js";import"./CreateProjectModal-Dr70u7kZ.js";import"./ConfirmationDialog-DI2sp8KX.js";import"./DialogBase-acH2E9d8.js";import"./Close-X_gTdy4Z.js";import"./HelpPopover-ERFNAkmY.js";import"./MarkdownPopover-D3Ji5HMq.js";import"./LightTooltip-BwX_yUDD.js";import"./MarkdownSynapse-aw0jXk0G.js";import"./SkeletonButton-DhdzaN7E.js";import"./SkeletonInlineBlock-Bqd6TYJI.js";import"./SkeletonTable-IAUM-Obo.js";import"./SkeletonParagraph-BFx803tv.js";import"./RadioGroup-C8vl9WA9.js";import"./Radio-BGgG7vUD.js";import"./SwitchBase-DwxvIWq-.js";import"./FormGroup-Ck15U7vp.js";import"./FormControlLabel-h3JE9ECB.js";import"./Chip-BLhbfSeY.js";import"./SynapseHomepageNavBar-BlBfgtCS.js";import"./SageResourcesPopover-CHa2m5vK.js";import"./Grid-CnqCusZN.js";import"./index-C5DEBePd.js";import"./MenuItem-B1xoDZlQ.js";import"./UserBadge-BDhj17Fq.js";import"./useUserGroupHeader-CC3P47ZT.js";import"./Card-CSsZocl6.js";import"./searchDefaults-BcpuwNSa.js";import"./Slide-DE0EN4YF.js";import"./InputAdornment-DLxU4jsW.js";import"./listItemButtonClasses-BmmzCt_y.js";import"./Badge-BJv0-Xv4.js";import"./usePreviousProps-BBk78ney.js";const Q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
