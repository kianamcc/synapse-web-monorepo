import{z as d,b as e,o as u,s as t,kp as i,kq as c,H as s,kr as R,i as m,ks as E,kt as _,a0 as I,dG as S,k8 as O}from"./iframe--e7tPOH7.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-DvTGLsex.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-DFQT8UTe.js";import"./useAccessRequirements-DsgkyaSY.js";import"./index-B0hb1_FS.js";import"./_baseOrderBy-D_ZC_Cyk.js";import"./_baseIteratee-DiAJV_uA.js";import"./_baseMap-Dq1V0zb5.js";import"./_baseEach-g2_Zy4Dj.js";import"./useInfiniteQuery-DhFcZOnt.js";import"./groupBy-CdPaSeI7.js";import"./_createAggregator-Dw032Fqr.js";import"./DialogBase-DNF9auJc.js";import"./Close-B-eQ4kzT.js";import"./HelpPopover-D1896MTn.js";import"./MarkdownPopover-DgdSpLQA.js";import"./LightTooltip-CfxxK8Nb.js";import"./MarkdownSynapse-Bzo0baHo.js";import"./SkeletonButton-_aLRz4g8.js";import"./SkeletonInlineBlock-CYh7Z-UU.js";import"./SkeletonTable-CaoeDxPi.js";import"./SkeletonParagraph-DxfKrJwN.js";import"./EntityLink-BjrhT_vZ.js";import"./useEntity-Co20u6Rb.js";import"./pickBy-CHuVCXcX.js";import"./isString-BV1H8WPp.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CqwT8UJd.js";import"./useGetEntityHeaders-BEv4WALe.js";import"./EntityIcon-CHtpPnfv.js";import"./ErrorChip-BYu4Y1_n.js";import"./Chip-BjLa75DM.js";import"./UserOrTeamBadge-bUKUxpGX.js";import"./useUserGroupHeader-s0veRE4v.js";import"./TeamBadge-C2HNtI-1.js";import"./UserBadge-BS9OSWR1.js";import"./useUserBundle-Cvjt2mpu.js";import"./MenuItem-ClPLR1c1.js";import"./Card-BExoznwr.js";import"./UnmanagedACTAccessRequirementItem-ZEEMDhIN.js";import"./RequirementItem-Cw7c2HIK.js";import"./LockTwoTone-BGf2-qET.js";import"./ManagedACTAccessRequirementItemView-MzTQmZXi.js";import"./SelfSignAccessRequirementItem-DfOqFCI2.js";import"./DataAccessRequestAccessorsFilesForm-BoGoDNGM.js";import"./enums-lD8wATiC.js";import"./_arrayReduce-CrxnWFSq.js";import"./uniq-YdFBlWk4.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-BrZAIVCv.js";import"./UserSearchBox-J6-nDvfU.js";import"./useDebouncedEffect-Htxr2mzk.js";import"./Autocomplete-CwBzqZJ8.js";import"./usePreviousProps-C2VjmU0C.js";import"./RadioGroup-By2jeZJK.js";import"./Radio-B7xydFXE.js";import"./SwitchBase-xd1f4aUc.js";import"./FormGroup-zkCCg-rJ.js";import"./FormControlLabel-DIFOv5rN.js";import"./UploadDocumentField-ByYmtmm2.js";import"./FileUpload-BZPeR_7M.js";import"./ManagedACTAccessRequirementFormWikiWrapper-BfRMw1KA.js";import"./GridLegacy-D3hcr3BJ.js";import"./ResearchProjectForm-CUH19y0f.js";import"./TextFieldWithWordLimit-BtUAuNkz.js";import"./AuthenticatedRequirement-DBkk-RS7.js";import"./CertificationRequirement-BPj3afbB.js";import"./TwoFactorAuthEnabledRequirement-D9ALLqag.js";import"./ValidationRequirement-DAy4Qbp6.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-pySm3fyq.js";import"./RejectDataAccessRequestModal-KTcg5MUs.js";import"./CannedRejectionDialog-DT4bLwJc.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-DPfClze9.js";import"./Checkbox-BZ_kVbRn.js";import"./Grid-D5P_9YO-.js";import"./upperFirst-R--fbybs.js";import"./_stringToArray-Cm87sIRN.js";const Je={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${R(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${E(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Ve=["Demo","DemoError"];export{o as Demo,n as DemoError,Ve as __namedExportsOrder,Je as default};
