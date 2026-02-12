import{g as s,n as e,b as o,H as a,w as i,dI as t}from"./iframe-Cw2Vf6_R.js";import{E as d}from"./EvaluationEditorPage-D8BxpRwW.js";import"./index-Chi_LkuB.js";import"./WarningDialog-BumYfhre.js";import"./ConfirmationDialog-CpDn5qEd.js";import"./DialogBase-Ch4N59fU.js";import"./Close-WUycMzMO.js";import"./HelpPopover-CVM1ST3g.js";import"./MarkdownPopover-ARMdgv36.js";import"./LightTooltip-CsZ7UZ4g.js";import"./MarkdownSynapse-Dz3rltmw.js";import"./SkeletonButton-CH7PSBg9.js";import"./SkeletonInlineBlock-BXybPdXq.js";import"./SkeletonTable-CFa2K4dK.js";import"./SkeletonParagraph-DgBCouD8.js";import"./CreatedOnByUserDiv-Cln9aDow.js";import"./UserBadge-CyekxS7f.js";import"./useUserBundle-Dp6-PaGP.js";import"./useSuspenseQuery-Cn71fWAt.js";import"./MenuItem-y3yB9tRp.js";import"./Card-DTlMPEDT.js";import"./Chip-BqceZA6q.js";import"./DateTimePicker-dfjU_L4Z.js";import"./useMobilePicker-B-NO77ey.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-BDmvth_f.js";import"./index-DoVT484J.js";import"./ListItem-D6MwjqT7.js";import"./listItemButtonClasses-CPW8A3WP.js";import"./Tabs-BQSOFpwz.js";import"./KeyboardArrowRight-CbVjpB2I.js";import"./CardContent-DqLdJ1bT.js";import"./Grid-4IXIXWRo.js";import"./upperFirst-BrJlbycD.js";import"./_stringToArray-C1meFFs2.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,z={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(o),e.get(`${o}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),e.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    entityId: 'syn5585645'
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), http.get(\`\${MOCK_REPO_ORIGIN}/repo/v1/evaluation/:id\`, () => {
        return HttpResponse.json({
          id: '9614712',
          etag: 'a2b871cb-faa4-471a-8c23-b917c77fecb2',
          name: 'a',
          description: 'b',
          ownerId: MOCK_USER_ID.toString(),
          createdOn: '2021-03-02T22:16:14.552Z',
          contentSource: 'syn5585645',
          submissionInstructionsMessage: 'c',
          submissionReceiptMessage: 'c'
        }, {
          status: 200
        });
      }), http.post(\`\${MOCK_REPO_ORIGIN}/repo/v1/evaluation/:id/round/list\`, () => {
        return HttpResponse.json({
          page: [
          // Ended
          {
            id: '259',
            etag: '6f54c353-6c04-46b1-956d-096db1008bce',
            evaluationId: '9614712',
            roundStart: '2022-11-27T08:00:00.000Z',
            roundEnd: '2022-11-30T08:00:00.000Z'
          },
          // Ongoing
          {
            id: '260',
            etag: '6f54c353-6c04-46b1-956d-096db1008bce',
            evaluationId: '9614712',
            roundStart: dayjs().subtract(1, 'day').toISOString(),
            roundEnd: dayjs().add(2, 'day').toISOString()
          },
          // Future
          {
            id: '261',
            etag: '6f54c353-6c04-46b1-956d-096db1008bce',
            evaluationId: '9614712',
            roundStart: dayjs().add(1, 'week').toISOString(),
            roundEnd: dayjs().add(2, 'week').toISOString()
          }]
        }, {
          status: 200
        });
      })]
    }
  },
  args: {
    evaluationId: '9614712'
  }
}`,...r.parameters?.docs?.source}}};const A=["Entity","Evaluation"];export{n as Entity,r as Evaluation,A as __namedExportsOrder,z as default};
