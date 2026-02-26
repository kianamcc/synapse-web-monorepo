import{g as d,k as u,n as t,a3 as c,dN as R,b as e,km as i,kn as E,H as s,ko as _,p as m,kp as I,kq as S,k5 as O}from"./iframe-D4dZwAiu.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-BVJX1WTp.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-fVxew5BG.js";import"./useAccessRequirements-B0iEcAuc.js";import"./index-qjOO6W60.js";import"./_baseOrderBy-Ch55E-5o.js";import"./_baseIteratee-hrWHcORH.js";import"./_baseMap-CRskOV4U.js";import"./_baseEach-Ce7kzn1Q.js";import"./useInfiniteQuery-97YTJVGW.js";import"./groupBy-20D5CmUz.js";import"./_createAggregator-Cu1O6Ts8.js";import"./DialogBase-CZmZCl2F.js";import"./Close-pxcZfnaD.js";import"./HelpPopover-COkmGEHV.js";import"./MarkdownPopover-C1RJbRCi.js";import"./LightTooltip-Cpk7XR6L.js";import"./MarkdownSynapse-_XkOqT-B.js";import"./SkeletonButton-BF6SPb4p.js";import"./SkeletonInlineBlock-BE4VGVg9.js";import"./SkeletonTable-8IE5S5u8.js";import"./SkeletonParagraph-CCi1oakt.js";import"./EntityLink-JDIfAW7o.js";import"./useEntity-CLsVNppT.js";import"./pickBy-Bir1C-NQ.js";import"./isString-B22YpsO2.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-ClqOATdC.js";import"./useGetEntityHeaders-wbj6vrOt.js";import"./EntityIcon-wCWO95nQ.js";import"./ErrorChip-D06eUMzg.js";import"./Chip-BrFyeTvK.js";import"./UserOrTeamBadge-D9nYBr_W.js";import"./UserBadge-C4q-1h63.js";import"./useUserBundle-DJaOK7gx.js";import"./MenuItem-i2UFDYLy.js";import"./Card-BgubtV-0.js";import"./TeamBadge-Czk6d5nD.js";import"./UnmanagedACTAccessRequirementItem-CcYEGA9z.js";import"./RequirementItem-Bqn0SJkT.js";import"./LockTwoTone-Cy82rMNW.js";import"./UserSearchBoxV2-Bgdq_b7A.js";import"./useDebouncedEffect-DBEBm7ax.js";import"./use-deep-compare-effect.esm-CZn1YOV_.js";import"./uniq-CXTi0pNt.js";import"./without-BLk6V1np.js";import"./Select-aab027f3.esm-DxOPtldD.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-IujnjCbu.js";import"./SelfSignAccessRequirementItem-CfcXMDP1.js";import"./DataAccessRequestAccessorsFilesForm-E6kVCUm6.js";import"./enums-DV4lz3M_.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-DycGFCsz.js";import"./RadioGroup-KIMZ7XWq.js";import"./Radio-wL87KhXk.js";import"./SwitchBase-BC3YewNK.js";import"./FormGroup-CzqzYkP5.js";import"./FormControlLabel-xBFb-JxA.js";import"./UploadDocumentField-Bj68jea5.js";import"./FileUpload-BzJTyFNk.js";import"./ManagedACTAccessRequirementFormWikiWrapper-DS_X_CRl.js";import"./GridLegacy-BP035fBT.js";import"./ResearchProjectForm-D-tVCijk.js";import"./TextFieldWithWordLimit-D8cbHdGr.js";import"./AuthenticatedRequirement-DjBuH-zg.js";import"./CertificationRequirement-DE1L-M9e.js";import"./TwoFactorAuthEnabledRequirement-Cumjb0HL.js";import"./ValidationRequirement-CEuUTjXm.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-BdaVt9zV.js";import"./RejectDataAccessRequestModal-BktZBzUz.js";import"./CannedRejectionDialog-8BwzKfqC.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-0mvEAmvI.js";import"./Checkbox-8IZKAE9H.js";import"./Grid-DVZ-3OGU.js";import"./upperFirst-Cug_hJ3K.js";import"./_stringToArray-3gAiK9jU.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Ze=["Demo","DemoError"];export{o as Demo,n as DemoError,Ze as __namedExportsOrder,Ve as default};
