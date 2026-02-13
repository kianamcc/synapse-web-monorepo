import{g as s,n as e,b as o,H as a,w as i,dI as t}from"./iframe-CAB19BbH.js";import{E as d}from"./EvaluationEditorPage-UxogNYM2.js";import"./index-Chi_LkuB.js";import"./WarningDialog-BP4DPMdy.js";import"./ConfirmationDialog-M8D-sUFp.js";import"./DialogBase-Bewb0Whx.js";import"./Close-CYApig56.js";import"./HelpPopover-BWiIPGwh.js";import"./MarkdownPopover-DcK6NE8b.js";import"./LightTooltip-C9PyqNfw.js";import"./MarkdownSynapse-C75K0Q9-.js";import"./SkeletonButton-Ap83qpg-.js";import"./SkeletonInlineBlock-DsyBz5jn.js";import"./SkeletonTable-B83AcFFC.js";import"./SkeletonParagraph-Chcpv0Ew.js";import"./CreatedOnByUserDiv-Hk1BRu94.js";import"./UserBadge-BmLtYB6u.js";import"./useUserBundle-D6Ieyrcj.js";import"./useSuspenseQuery-zF1b63rt.js";import"./MenuItem-CF0OPkSJ.js";import"./Card-C4eY6NNN.js";import"./Chip-DBDLRQBv.js";import"./DateTimePicker-fl3MfXT_.js";import"./useMobilePicker-3opO0tJv.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-CUpti3qp.js";import"./index-4rOGAnCi.js";import"./ListItem-CQX01yF6.js";import"./listItemButtonClasses-CTjDkrXb.js";import"./Tabs-pYQbtiPq.js";import"./KeyboardArrowRight-D4NYSPhT.js";import"./CardContent-BQGiMBqE.js";import"./Grid-CjslGWPv.js";import"./upperFirst-BYrqS-CU.js";import"./_stringToArray-CHa1CGqr.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,z={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(o),e.get(`${o}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),e.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
