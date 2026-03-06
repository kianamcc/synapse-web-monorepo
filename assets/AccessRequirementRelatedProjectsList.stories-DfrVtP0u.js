import{n as o,b as n,Q as a,H as c}from"./iframe-BMgfrXfb.js";import{A as m}from"./AccessRequirementRelatedProjectsList-C-OQumpF.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-DjjUGyyf.js";import"./index-DVKuYuST.js";import"./_baseOrderBy-BXE4YCND.js";import"./_baseIteratee-5eLKOOqR.js";import"./_baseMap-CqqPaLqj.js";import"./_baseEach-j47pxew3.js";import"./useInfiniteQuery-Cbz01EgT.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-C3va4Abr.js";import"./useEntity-BFmhndJX.js";import"./pickBy-Bdckf9kO.js";import"./isString-BqaHYMQK.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Ckgtub0H.js";import"./useGetEntityHeaders-CmdBf-ot.js";import"./EntityIcon-CaggXdFC.js";import"./ErrorChip-C6lJNu9j.js";import"./Chip-Bg1Tm2ZJ.js";import"./ListItem-DKwKZ5Zi.js";import"./listItemButtonClasses-C_WS2KLX.js";const f={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: 9603055
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: 9605913
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: 1234567
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [
      // searchAccessRequirements
      http.post(\`\${MOCK_REPO_ORIGIN}\${ACCESS_REQUIREMENT_SEARCH}\`, () => {
        const zeroRelatedProjects = {
          results: [{
            id: '1234567',
            type: 'org.sagebionetworks.repo.model.ManagedACTAccessRequirement',
            createdOn: '2017-08-23T18:48:20.892Z',
            modifiedOn: '2023-12-14T00:43:41.315Z',
            name: 'Team AR without Related Projects',
            version: '1',
            relatedProjectIds: [],
            reviewerIds: []
          }]
        };
        return HttpResponse.json(zeroRelatedProjects, {
          status: 200
        });
      })]
    }
  }
}`,...s.parameters?.docs?.source}}};const v=["ManyProjects","OneProject","ZeroProjectsMock"];export{e as ManyProjects,r as OneProject,s as ZeroProjectsMock,v as __namedExportsOrder,f as default};
