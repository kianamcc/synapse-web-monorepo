import{at as g,j as e,r as w}from"./iframe-Bvv4ID9O.js";import{S as v}from"./SynapseNavDrawer-PhWNInpd.js";import"./index-r8ZA1smB.js";import"./useDataAccessSubmission-Dof4IbnR.js";import"./useInfiniteQuery-DnzzjwPo.js";import"./useDownloadList-BKnv5X2n.js";import"./waitForAsyncResult-CaQ4j6ac.js";import"./CreateProjectModal-CiidCA3L.js";import"./ConfirmationDialog-BWepRO3O.js";import"./DialogBase-DI9hpM3M.js";import"./Close-gfuBCl1y.js";import"./HelpPopover-KjW2Liz1.js";import"./MarkdownPopover-DtkdEBJk.js";import"./LightTooltip-BbQfoeul.js";import"./MarkdownSynapse-BqihxWd0.js";import"./SkeletonButton-CX_iqB-U.js";import"./SkeletonInlineBlock-B4dGOeql.js";import"./SkeletonTable-CrAxGwqy.js";import"./SkeletonParagraph-BrF-J-9t.js";import"./SynapseHomepageNavBar-BzoIS63r.js";import"./SageResourcesPopover-mcf-qrSM.js";import"./Grid-LuVi20o5.js";import"./index-TPGr2WBQ.js";import"./MenuItem-CfdXNe3p.js";import"./UserBadge-fKQtuujV.js";import"./Card-ibXZcJOb.js";import"./Chip-CH6SKqjX.js";import"./Slide-BGcvVclH.js";import"./InputAdornment-BTx3RwlH.js";import"./listItemButtonClasses-DYJBi0XT.js";import"./Badge-DUY1uZy_.js";import"./usePreviousProps-tpWW8mks.js";const V={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:g,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},r={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...r.args},render:s=>e.jsxs(e.Fragment,{children:[e.jsx(v,{initIsOpen:!1,gotoPlace:h=>{window.alert(`Nav bar calling back to change route to ${h}`)}}),e.jsx(g,{...s})]}),decorators:[s=>(w.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),e.jsx(s,{}))]};var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
