import{g as u,k as d,n as t,a2 as c,d_ as R,b as e,kt as i,ku as E,H as s,kv as _,p as m,kw as I,kx as S,kc as O}from"./iframe-DmIbR_r6.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-DwXC6eFj.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-CsikS-JE.js";import"./useAccessRequirements-CQfwC5jP.js";import"./index-Cbto9jav.js";import"./_baseOrderBy-B685EpFZ.js";import"./_baseIteratee-DGiWPmRT.js";import"./_baseMap-CMpD4lY6.js";import"./_baseEach-BQnbae_L.js";import"./useQueries-LRi5eBel.js";import"./useInfiniteQuery-CI1b4wGw.js";import"./groupBy-G5YUlqvZ.js";import"./_createAggregator-C4V07lTu.js";import"./DialogBase-ChzVu5cL.js";import"./Close-Bq87bjEk.js";import"./HelpPopover-cKaKE6m4.js";import"./MarkdownPopover-CDin4ext.js";import"./LightTooltip-CYkDKzfj.js";import"./MarkdownSynapse-DuxA3dVB.js";import"./SkeletonButton-vlFvkNkv.js";import"./SkeletonInlineBlock-DFTJODNT.js";import"./SkeletonTable-Bj3J0JYP.js";import"./SkeletonParagraph-BUZlTYNH.js";import"./EntityLink-CpvrM0ik.js";import"./useEntity-Bppk7qsE.js";import"./pickBy-DGqmeqZf.js";import"./isString-krVYXN8Q.js";import"./useSuspenseQuery-Bb68RTLn.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BMJT5xvS.js";import"./useGetEntityHeaders-BRXYbcoe.js";import"./EntityIcon-CgnT9y6Y.js";import"./ErrorChip-DkcHK-RW.js";import"./Chip-BRJez_-q.js";import"./UserOrTeamBadge-CEz3_8Ny.js";import"./UserBadge-BHBKP-iC.js";import"./useUserBundle-B2LL3X0c.js";import"./MenuItem-BnZD-coi.js";import"./Card-DxCpoD8K.js";import"./TeamBadge-CQjBBlal.js";import"./UnmanagedACTAccessRequirementItem-BnxUIzwu.js";import"./RequirementItem-Bs40dGh1.js";import"./LockTwoTone-CKezKNuY.js";import"./UserSearchBoxV2-dFGVowRg.js";import"./useDebouncedEffect-D6e_8jOD.js";import"./use-deep-compare-effect.esm-CJglqS1P.js";import"./uniq-DzOHloOS.js";import"./without-BSOkDosU.js";import"./Select-aab027f3.esm-DRYArQML.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-8A_Tdo7t.js";import"./SelfSignAccessRequirementItem-D41gaiRc.js";import"./DataAccessRequestAccessorsFilesForm-CygzZJwI.js";import"./enums-DcM6QjO0.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-DlTO5AN-.js";import"./RadioGroup-D3RfrHWB.js";import"./Radio-CBdJfNMf.js";import"./SwitchBase-CUTqoSBF.js";import"./FormGroup-D08ji2xj.js";import"./FormControlLabel-F84xQZnV.js";import"./UploadDocumentField-BrKkAQBe.js";import"./FileUpload-BmvpfJTl.js";import"./ManagedACTAccessRequirementFormWikiWrapper-C83vjuyc.js";import"./GridLegacy-7Rfi2gSQ.js";import"./ResearchProjectForm-pJKpjmIP.js";import"./TextFieldWithWordLimit-BWk-u_kc.js";import"./AuthenticatedRequirement-C6hA3gx3.js";import"./CertificationRequirement-DnUYJ3eu.js";import"./TwoFactorAuthEnabledRequirement-BmpgPpWP.js";import"./ValidationRequirement-BfXNRyes.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-DyQAYBAd.js";import"./RejectDataAccessRequestModal-RfzmsyrJ.js";import"./CannedRejectionDialog-BLpW2ElD.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-Di6NNHa2.js";import"./Checkbox-BkqDpdYQ.js";import"./Grid-DiIhkCNi.js";import"./upperFirst-CZWaM3B8.js";import"./_stringToArray-UjcNyvLc.js";const ze={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Xe=["Demo","DemoError"];export{o as Demo,n as DemoError,Xe as __namedExportsOrder,ze as default};
