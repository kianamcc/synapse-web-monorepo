import{at as g,j as e,r as w}from"./iframe-D2BiYAJm.js";import{S as v}from"./SynapseNavDrawer-DMEfzCF0.js";import"./index-r8ZA1smB.js";import"./useDataAccessSubmission-CnP3kyMc.js";import"./useInfiniteQuery-Sh2g8CYk.js";import"./useDownloadList-Cy-KrXvk.js";import"./waitForAsyncResult-Dk46y7gK.js";import"./CreateProjectModal-CoJTn0gx.js";import"./ConfirmationDialog-BHYK11ln.js";import"./DialogBase-C88NL5F2.js";import"./Close-CPRnS3EQ.js";import"./HelpPopover-By6qNja7.js";import"./MarkdownPopover-DszL4-wR.js";import"./LightTooltip-BghfsgXw.js";import"./MarkdownSynapse-CGCT0a2t.js";import"./SkeletonButton-B12Q1It5.js";import"./SkeletonInlineBlock-BQ13hP2k.js";import"./SkeletonTable-Deli_bNc.js";import"./SkeletonParagraph-BT8-dcZm.js";import"./SynapseHomepageNavBar-E4rPlaOZ.js";import"./SageResourcesPopover-DP659Ccq.js";import"./Grid-B4RGG4Wg.js";import"./index-B3O79Ih6.js";import"./MenuItem-DHvtuYhK.js";import"./UserBadge-kZIqHyCo.js";import"./Card-Dy_ZNw9D.js";import"./Chip-c69jX1Rh.js";import"./Slide-Cwa1ZzUv.js";import"./InputAdornment-B8jqP_ze.js";import"./listItemButtonClasses-DUq_dJ2b.js";import"./Badge-BAS-AFuh.js";import"./usePreviousProps-CsFFd7jD.js";const V={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:g,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},r={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...r.args},render:s=>e.jsxs(e.Fragment,{children:[e.jsx(v,{initIsOpen:!1,gotoPlace:h=>{window.alert(`Nav bar calling back to change route to ${h}`)}}),e.jsx(g,{...s})]}),decorators:[s=>(w.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),e.jsx(s,{}))]};var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    show: true,
    title: 'Package has been downloaded',
    description: 'The files contained in this zip file have been removed from your list.',
    isGlobal: false
  }
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var c,p,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var l,d,u;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const X=["DownloadListPackageCreation","SuccessAlertWithPrimaryButtonOnly","SynapseNavDrawerIsShowing"];export{t as DownloadListPackageCreation,r as SuccessAlertWithPrimaryButtonOnly,o as SynapseNavDrawerIsShowing,X as __namedExportsOrder,V as default};
