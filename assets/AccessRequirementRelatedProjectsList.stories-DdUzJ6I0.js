import{n as o,b as n,Q as a,H as c}from"./iframe-CZHSx5wE.js";import{A as m}from"./AccessRequirementRelatedProjectsList-RjN28BFt.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-B2ui8s-s.js";import"./index-BdE-IeMQ.js";import"./_baseOrderBy-Rq4XcVNX.js";import"./_baseIteratee-DCncjzSw.js";import"./_baseMap-C7oJPype.js";import"./_baseEach-D3LyP7M6.js";import"./useInfiniteQuery-CS833kDM.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-CwNC1i02.js";import"./useEntity-DTPz22my.js";import"./pickBy-C3Fd7sur.js";import"./isString-Bk7WbP2_.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-C0ASgpHy.js";import"./useGetEntityHeaders-ZzmpFnn5.js";import"./EntityIcon-jE3VTBiB.js";import"./ErrorChip-Du4NsD2v.js";import"./Chip-DRM-PW0Q.js";import"./ListItem-Boavtua3.js";import"./listItemButtonClasses-CMOAJ4Dg.js";const f={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
