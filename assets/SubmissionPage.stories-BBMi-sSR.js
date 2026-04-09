import{z as d,b as e,o as u,s as t,kp as i,kq as c,H as s,kr as R,i as m,ks as E,kt as _,a0 as I,dG as S,k8 as O}from"./iframe-FDH2xSLc.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-DMaPBNn6.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-BH7Bz61M.js";import"./useAccessRequirements-DVu5cb0o.js";import"./index-CzuvZxX2.js";import"./_baseOrderBy-CTk-QBsA.js";import"./_baseIteratee-BrA6Zoce.js";import"./_baseMap-A80CCfax.js";import"./_baseEach-DawTZUlN.js";import"./useInfiniteQuery-B-tinRUO.js";import"./groupBy-sZ3hA-zo.js";import"./_createAggregator-CkKKZuBW.js";import"./DialogBase-ukX_Dfis.js";import"./Close-DbaBw_Hg.js";import"./HelpPopover-CeMxTcbY.js";import"./MarkdownPopover-BINzzL9F.js";import"./LightTooltip-BxuR9X41.js";import"./MarkdownSynapse-DubjqhF7.js";import"./SkeletonButton-xYbyYL9k.js";import"./SkeletonInlineBlock-CrGk-deJ.js";import"./SkeletonTable-BfwZdIL6.js";import"./SkeletonParagraph-BniWr4_C.js";import"./EntityLink-DYOpNO6O.js";import"./useEntity-DHBL_oM5.js";import"./pickBy-CFq9MVR5.js";import"./isString-BrgtB96k.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-D18d3KJd.js";import"./useGetEntityHeaders-BA5IPc_7.js";import"./EntityIcon-DP5eauC8.js";import"./ErrorChip-Ca0tdbNf.js";import"./Chip-CzpLZLiP.js";import"./UserOrTeamBadge-B8cVGyFZ.js";import"./useUserGroupHeader-DQ8vb17b.js";import"./TeamBadge-DdSnOzUm.js";import"./UserBadge-BTH9G2vn.js";import"./useUserBundle-C0iPIx3M.js";import"./MenuItem-Cv9z9awV.js";import"./Card-Cp-G3rzT.js";import"./UnmanagedACTAccessRequirementItem-CgZ03Jku.js";import"./RequirementItem-hLheWehC.js";import"./LockTwoTone-CX4U3mTi.js";import"./ManagedACTAccessRequirementItemView-BeKYmO0t.js";import"./SelfSignAccessRequirementItem-C0fUd4j5.js";import"./DataAccessRequestAccessorsFilesForm-8dyldtnC.js";import"./enums-D1fiHH8c.js";import"./_arrayReduce-CrxnWFSq.js";import"./uniq-CVUh3LnB.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-_hHZId_n.js";import"./UserSearchBox-6qlMdxGM.js";import"./useDebouncedEffect-BzNxdHf3.js";import"./Autocomplete-t_5KhxxP.js";import"./usePreviousProps-DMYUt7tk.js";import"./RadioGroup-j9ymDYP8.js";import"./Radio-CutFuYEE.js";import"./SwitchBase-B8j7JnXc.js";import"./FormGroup-Cdk3Ngbj.js";import"./FormControlLabel-BnPk5lfl.js";import"./UploadDocumentField-BbYazhOo.js";import"./FileUpload-DDZ4xBMj.js";import"./ManagedACTAccessRequirementFormWikiWrapper-CmfhvGJn.js";import"./GridLegacy-BVso7dRX.js";import"./ResearchProjectForm-DHyayn3B.js";import"./TextFieldWithWordLimit-DIHf5jJ4.js";import"./AuthenticatedRequirement-DpSeKU7K.js";import"./CertificationRequirement-ByAfxr_y.js";import"./TwoFactorAuthEnabledRequirement-bMv2xEn5.js";import"./ValidationRequirement-D67oy76Y.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-BhY6FrjY.js";import"./RejectDataAccessRequestModal-BIQl4A0q.js";import"./CannedRejectionDialog-Ct7ZOg8x.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-D1K99bC1.js";import"./Checkbox-BctxXkIC.js";import"./Grid-DJnNU4pw.js";import"./upperFirst-BQ6hjif0.js";import"./_stringToArray-C-8VGKrP.js";const Je={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${R(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${E(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
