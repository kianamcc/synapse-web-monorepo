import{n as o,b as n,Q as a,H as c}from"./iframe-B232wCNe.js";import{A as m}from"./AccessRequirementRelatedProjectsList-uS6110vq.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-B_dVYCbZ.js";import"./index-B8EHcCSt.js";import"./_baseOrderBy-ATaEyx6N.js";import"./_baseIteratee-DYtHAtdK.js";import"./_baseMap-lOtKvTec.js";import"./_baseEach-BXg_PS_g.js";import"./useInfiniteQuery-DWrZvRU-.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-DKoTHkmn.js";import"./useEntity-C8RzoBC_.js";import"./pickBy-Cjq_BC74.js";import"./isString-BlP-ka-y.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Cwq6kYV5.js";import"./useGetEntityHeaders-BvUM1q18.js";import"./EntityIcon-4cVck1RH.js";import"./ErrorChip-BLBw-21D.js";import"./Chip-C9IsdVPl.js";import"./ListItem-Dyv9Cu1d.js";import"./listItemButtonClasses-AwHak7Ut.js";const f={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
