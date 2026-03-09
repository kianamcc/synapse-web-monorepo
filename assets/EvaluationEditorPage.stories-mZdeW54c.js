import{g as s,n as o,b as e,H as a,w as i,dv as t}from"./iframe-q5BnJc5S.js";import{E as d}from"./EvaluationEditorPage-B4-dq8rk.js";import"./index-Chi_LkuB.js";import"./WarningDialog-CdaixJBr.js";import"./ConfirmationDialog-cK5dtH2n.js";import"./DialogBase-TxfBJQdL.js";import"./Close-BFioOlv8.js";import"./HelpPopover-D18uwdic.js";import"./MarkdownPopover-Cs7UCNrh.js";import"./LightTooltip-Q1_0_6h6.js";import"./MarkdownSynapse-DexZcVsN.js";import"./SkeletonButton-CD8U5Nrp.js";import"./SkeletonInlineBlock-Ci-yqlbg.js";import"./SkeletonTable-BfI5L8UG.js";import"./SkeletonParagraph-CBm7mA9i.js";import"./CreatedOnByUserDiv-Dp12tQnf.js";import"./UserBadge-ByUch6Am.js";import"./useUserBundle-DzfGQjuz.js";import"./MenuItem-Dyp2z-uJ.js";import"./Card-Dv6tDWJX.js";import"./Chip-DEZ4NRsM.js";import"./DateTimePicker--WM_t5q-.js";import"./useMobilePicker-Bq3-kV1u.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-Day6LqyR.js";import"./index-CnWYiVZi.js";import"./ListItem-BPjLVF9P.js";import"./listItemButtonClasses-BmpH4sBo.js";import"./Tabs-BPjr_4av.js";import"./KeyboardArrowRight-ChiBeQGN.js";import"./CardContent-DlqpN5ee.js";import"./Grid-CqsvcyoA.js";import"./upperFirst-BK7Fretm.js";import"./_stringToArray-CMYGRK8q.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,q={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(e),o.get(`${e}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),o.post(`${e}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const z=["Entity","Evaluation"];export{n as Entity,r as Evaluation,z as __namedExportsOrder,q as default};
