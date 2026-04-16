import{v as s,z as i,b as n,s as o,H as u}from"./iframe-BoShs1FP.js";import{E as m}from"./EvaluationCard-Buxv1M3K.js";import"./index-Chi_LkuB.js";import"./DeleteEvaluationQueueConfirmationDialog-DfxFXCv0.js";import"./UserBadge-BDhj17Fq.js";import"./useUserBundle-eEwiRblB.js";import"./useUserGroupHeader-CC3P47ZT.js";import"./SkeletonTable-IAUM-Obo.js";import"./MenuItem-B1xoDZlQ.js";import"./Card-CSsZocl6.js";import"./Chip-BLhbfSeY.js";import"./WarningDialog-BgQqOpEE.js";import"./ConfirmationDialog-DI2sp8KX.js";import"./DialogBase-acH2E9d8.js";import"./Close-X_gTdy4Z.js";import"./HelpPopover-ERFNAkmY.js";import"./MarkdownPopover-D3Ji5HMq.js";import"./LightTooltip-BwX_yUDD.js";import"./MarkdownSynapse-aw0jXk0G.js";import"./SkeletonButton-DhdzaN7E.js";import"./SkeletonInlineBlock-Bqd6TYJI.js";import"./SkeletonParagraph-BFx803tv.js";import"./FormControlLabel-h3JE9ECB.js";import"./Checkbox-DEIJ5Z9O.js";import"./SwitchBase-DwxvIWq-.js";import"./CardContent-CmCC3L2I.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,y={title:"Synapse/Challenge/EvaluationCard",component:m},r={evaluation:{id:"9614690",etag:"6f8aa977-527e-4b2f-9d87-beab2db99503",name:"Sample Evaluation Queue",description:"This is a sample Evaluation Queue",ownerId:"3345868",createdOn:"2021-01-05T00:41:11.670Z",contentSource:"syn23679309",submissionInstructionsMessage:"Do a barrel roll",submissionReceiptMessage:"We received your submission"},onEdit:e(),onModifyAccess:e(),onSubmit:e(),onDeleteSuccess:e()},t={args:r},a={parameters:{stack:"mock",msw:{handlers:[...i(n),o.get(`${n}/repo/v1/evaluation/:id/permissions`,()=>u.json({canChangePermissions:!0,canDeleteSubmissions:!0,canEditSubmissionStatuses:!0,canParticipate:!0,canPublicRead:!0,canView:!0,canViewPrivateSubmissionStatusAnnotations:!0,ownerPrincipalId:s,canEdit:!0,canSubmit:!0,canDelete:!0},{status:200})),o.delete(`${n}/repo/v1/evaluation/:id`,()=>new Response("",{status:200}))]}},args:{...r,evaluation:{...r.evaluation,ownerId:s.toString()}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: evaluationArgs
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), http.get(\`\${MOCK_REPO_ORIGIN}/repo/v1/evaluation/:id/permissions\`, () => {
        return HttpResponse.json({
          canChangePermissions: true,
          canDeleteSubmissions: true,
          canEditSubmissionStatuses: true,
          canParticipate: true,
          canPublicRead: true,
          canView: true,
          canViewPrivateSubmissionStatusAnnotations: true,
          ownerPrincipalId: MOCK_USER_ID,
          canEdit: true,
          canSubmit: true,
          canDelete: true
        }, {
          status: 200
        });
      }), http.delete(\`\${MOCK_REPO_ORIGIN}/repo/v1/evaluation/:id\`, () => new Response('', {
        status: 200
      }))]
    }
  },
  args: {
    ...evaluationArgs,
    evaluation: {
      ...evaluationArgs.evaluation,
      ownerId: MOCK_USER_ID.toString()
    }
  }
}`,...a.parameters?.docs?.source}}};const G=["Card","CardWithDeleteModal"];export{t as Card,a as CardWithDeleteModal,G as __namedExportsOrder,y as default};
