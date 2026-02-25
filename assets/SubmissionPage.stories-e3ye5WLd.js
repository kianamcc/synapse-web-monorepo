import{g as d,k as u,n as t,a3 as c,dZ as R,b as e,kw as i,kx as E,H as s,ky as _,p as m,kz as I,kA as S,kf as O}from"./iframe-HhNUql8D.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-BOlbwcBc.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-C33ZtfrT.js";import"./useAccessRequirements-CGb-E-2P.js";import"./index-Dr8U68KC.js";import"./_baseOrderBy-Ci2OaTcA.js";import"./_baseIteratee-DscUwa23.js";import"./_baseMap-Bdekh0DQ.js";import"./_baseEach-Z8qGCdKi.js";import"./useQueries-DJ5viPPl.js";import"./useInfiniteQuery-DE1A5qVC.js";import"./groupBy-BZqCtS5z.js";import"./_createAggregator-CIbVMDgU.js";import"./DialogBase-CixZag-K.js";import"./Close-DwkMpKYS.js";import"./HelpPopover-HYfG1omk.js";import"./MarkdownPopover-C0XojMIG.js";import"./LightTooltip-N2Yg4ppW.js";import"./MarkdownSynapse-Der_vikg.js";import"./SkeletonButton-CAAREen-.js";import"./SkeletonInlineBlock-Ckp06Ekm.js";import"./SkeletonTable-EUCE1WAM.js";import"./SkeletonParagraph-DMnpDLUG.js";import"./EntityLink-BpxoMdYN.js";import"./useEntity-DF-2AloP.js";import"./pickBy-CKjZAjje.js";import"./isString-D2bCjL-N.js";import"./useSuspenseQuery-DB6yHRv0.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BRlKCRN9.js";import"./useGetEntityHeaders-B3bDUdq0.js";import"./EntityIcon-DgoVxltf.js";import"./ErrorChip-DnUHpaN6.js";import"./Chip-CfoXnBsJ.js";import"./UserOrTeamBadge-DrVGgItU.js";import"./UserBadge-B8Kzug2j.js";import"./useUserBundle-B3ONxnuI.js";import"./MenuItem-CNBBPtb0.js";import"./Card-Bz-DCfDS.js";import"./TeamBadge-DkvVWVTh.js";import"./useRealmPrincipals-B9TEQ3L6.js";import"./UnmanagedACTAccessRequirementItem-DUOC3YoX.js";import"./RequirementItem-Bne1Rt-f.js";import"./LockTwoTone-DTyURBUH.js";import"./UserSearchBoxV2-sYNrgWyr.js";import"./useDebouncedEffect-dnFUnDMR.js";import"./use-deep-compare-effect.esm-BKeKIqEJ.js";import"./uniq-DmrgozJc.js";import"./without-CWGhFM0s.js";import"./Select-aab027f3.esm-Dpnrc3lw.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-KIwtSldc.js";import"./SelfSignAccessRequirementItem-dLDaznep.js";import"./DataAccessRequestAccessorsFilesForm-CgpcmYAJ.js";import"./enums-lngw8SOU.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-zGSNg2jr.js";import"./RadioGroup-Bz_NLIR-.js";import"./Radio-CR9eq1i7.js";import"./SwitchBase-B990BXLh.js";import"./FormGroup-CBm5akN6.js";import"./FormControlLabel-C-rWpYTl.js";import"./UploadDocumentField-CnqjOavK.js";import"./FileUpload-UjmOJee4.js";import"./ManagedACTAccessRequirementFormWikiWrapper-DZYOEUio.js";import"./GridLegacy-vtq68X8r.js";import"./ResearchProjectForm-BNyHrFkZ.js";import"./TextFieldWithWordLimit-FF6dAb02.js";import"./AuthenticatedRequirement-BljswXcy.js";import"./CertificationRequirement-CJbv_psI.js";import"./TwoFactorAuthEnabledRequirement-CYzOU0nJ.js";import"./ValidationRequirement-DX8d27hJ.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-oEu6Toj6.js";import"./RejectDataAccessRequestModal-6XUO0WZH.js";import"./CannedRejectionDialog-BU9AJuAW.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-X-q5EAD5.js";import"./Checkbox-Ddqx6MYE.js";import"./Grid-DCuy2lUH.js";import"./upperFirst-BgLZt5Ka.js";import"./_stringToArray-DxsSRXEw.js";const Xe={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'SubmissionPage',
  loaders: [() => registerTableQueryResult({
    sql: \`SELECT * FROM \${REJECT_SUBMISSION_CANNED_RESPONSES_TABLE}\`
  }, mockRejectionReasonsTableQueryResultBundle)],
  parameters: {
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), ...getWikiHandlers(MOCK_REPO_ORIGIN),
      // Return submission based on ID
      http.get(\`\${MOCK_REPO_ORIGIN}\${DATA_ACCESS_SUBMISSION_BY_ID(':id')}\`, ({
        params
      }) => {
        const submission = mockSubmissions.find(submission => params.id === submission.id);
        return HttpResponse.json(submission, {
          status: 200
        });
      }),
      // Return a mocked access requirement
      http.get(\`\${MOCK_REPO_ORIGIN}\${ACCESS_REQUIREMENT_BY_ID(':id')}\`, () => {
        return HttpResponse.json(mockManagedACTAccessRequirement, {
          status: 200
        });
      }), http.get(\`\${MOCK_REPO_ORIGIN}\${ACCESS_REQUIREMENT_WIKI_PAGE_KEY(':id')}\`, () => {
        return HttpResponse.json({
          wikiPageId: 123,
          ownerObjectId: mockManagedACTAccessRequirement.id,
          ownerObjectType: 'ACCESS_REQUIREMENT'
        }, {
          status: 200
        });
      }), http.get<{
        id: string;
      }>(\`\${MOCK_REPO_ORIGIN}/repo/v1/accessRequirement/:id/acl\`, ({
        params
      }) => {
        return HttpResponse.json({
          id: params.id,
          creationDate: '2022-05-20T14:32:31.665Z',
          etag: 'f4fbd4f2-751d-40dd-9421-1d2693231217',
          resourceAccess: [{
            principalId: MOCK_USER_ID_2,
            accessType: ['REVIEW_SUBMISSIONS']
          }]
        }, {
          status: 200
        });
      }), ...getHandlersForTableQuery(MOCK_REPO_ORIGIN), http.put(\`\${MOCK_REPO_ORIGIN}\${DATA_ACCESS_SUBMISSION_BY_ID(':id')}\`, async ({
        request
      }) => {
        return HttpResponse.json(await request.json(), {
          status: 201
        });
      })]
    }
  },
  args: {
    isReviewer: true,
    submissionId: 1
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Demo Error State',
  parameters: {
    msw: {
      handlers: [http.get(\`\${MOCK_REPO_ORIGIN}\${DATA_ACCESS_SUBMISSION_BY_ID(':id')}\`, () => {
        const errorResponse: ErrorResponse = {
          reason: 'The user must be validated in order to review data access submissions.',
          concreteType: 'org.sagebionetworks.repo.model.ErrorResponse'
        };
        return HttpResponse.json(errorResponse, {
          status: 403
        });
      })]
    }
  },
  args: {
    isReviewer: true,
    submissionId: 9999
  }
}`,...n.parameters?.docs?.source}}};const er=["Demo","DemoError"];export{o as Demo,n as DemoError,er as __namedExportsOrder,Xe as default};
