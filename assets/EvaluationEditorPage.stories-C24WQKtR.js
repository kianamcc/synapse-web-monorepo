import{g as s,n as o,b as e,H as a,w as i,du as t}from"./iframe-CZHSx5wE.js";import{E as d}from"./EvaluationEditorPage-Dbk6irgf.js";import"./index-Chi_LkuB.js";import"./WarningDialog-Do1L2ne0.js";import"./ConfirmationDialog-pnn_aK2g.js";import"./DialogBase-CS2gTNzV.js";import"./Close-Ds5z5nV-.js";import"./HelpPopover-AzM6-1Mr.js";import"./MarkdownPopover-_55D8pmQ.js";import"./LightTooltip-Bl7I4CQL.js";import"./MarkdownSynapse-phzYM2Y3.js";import"./SkeletonButton-BE152swZ.js";import"./SkeletonInlineBlock-BWjEXTNa.js";import"./SkeletonTable-BtPTkHAP.js";import"./SkeletonParagraph-BXCrfssX.js";import"./CreatedOnByUserDiv-DjZEdmLd.js";import"./UserBadge-BrFwZcdF.js";import"./useUserBundle-Cv-fJG41.js";import"./MenuItem-9G2m_4hr.js";import"./Card-CTm-897L.js";import"./Chip-DRM-PW0Q.js";import"./DateTimePicker-Cg1FMSx2.js";import"./useMobilePicker-ZJjmtRXf.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-CKROAQ08.js";import"./index-BdE-IeMQ.js";import"./ListItem-Boavtua3.js";import"./listItemButtonClasses-CMOAJ4Dg.js";import"./Tabs-DoaMAHsk.js";import"./KeyboardArrowRight-vwM8DeUz.js";import"./CardContent-J9FFkZ71.js";import"./Grid-BzGkt_Uj.js";import"./upperFirst-BvaFN2lJ.js";import"./_stringToArray-CPj_Q9l3.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,q={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(e),o.get(`${e}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),o.post(`${e}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
