import{z as u,b as e,o as d,s,kq as i,kr as c,H as t,ks as R,i as m,kt as E,ku as _,a0 as I,dH as S,k9 as O}from"./iframe-DOWR2259.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-BMHf_0Mg.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-CXNT_VfC.js";import"./useAccessRequirements-CqOb2q9V.js";import"./index-BQSvnnEc.js";import"./_baseOrderBy-B_OsYqF7.js";import"./_baseIteratee-D5WTHCBz.js";import"./_baseMap-CgaRb8YO.js";import"./_baseEach-v9IjSq7r.js";import"./useInfiniteQuery-Bxxw2SLJ.js";import"./groupBy-DDwRiFVp.js";import"./_createAggregator-DJEmbCYe.js";import"./DialogBase-BOtiLYHN.js";import"./Close-MTVASP6e.js";import"./HelpPopover-COj67R4q.js";import"./MarkdownPopover-D_jfDB0b.js";import"./LightTooltip-DEgnKIbO.js";import"./MarkdownSynapse-CZF-zxeL.js";import"./SkeletonButton-CL0b5STV.js";import"./SkeletonInlineBlock-dfitKoKa.js";import"./SkeletonTable-juUGe8TZ.js";import"./SkeletonParagraph-tnS4LISQ.js";import"./EntityLink-Bl8hbni1.js";import"./useEntity-PgtMFk5n.js";import"./pickBy-y8A-nIER.js";import"./isString-DMC7wGJ0.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BmOqt_6U.js";import"./useGetEntityHeaders-DeAqleg-.js";import"./EntityIcon-DIqMtZd5.js";import"./ErrorChip-Amlh1l9d.js";import"./Chip-CUZVi0iR.js";import"./UserOrTeamBadge-8wxXY_TV.js";import"./UserBadge-BK9aqAni.js";import"./useUserBundle-HK3fngpg.js";import"./MenuItem-LKT-cJqE.js";import"./Card-CxyXWyxz.js";import"./TeamBadge-DTsLUZsx.js";import"./UnmanagedACTAccessRequirementItem-DTw_ux1E.js";import"./RequirementItem-BmF40579.js";import"./CheckTwoTone-9yt90_te.js";import"./ManagedACTAccessRequirementItemView-BAHtxAwu.js";import"./SelfSignAccessRequirementItem-I7YpTYE2.js";import"./DataAccessRequestAccessorsFilesForm-BaJ2vkG2.js";import"./enums-y62uLdDY.js";import"./_arrayReduce-CrxnWFSq.js";import"./uniq-CF3-GXPz.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-By-_dY5S.js";import"./UserSearchBox-B-85fT0D.js";import"./useDebouncedEffect-CWEHFmV5.js";import"./Autocomplete-CBDbHqTD.js";import"./usePreviousProps-4oQzHQnB.js";import"./RadioGroup-GLX9QI89.js";import"./Radio-DeKYa5MS.js";import"./SwitchBase-CQWm8_8T.js";import"./FormGroup-f20ajUnv.js";import"./FormControlLabel-wYqx77kH.js";import"./UploadDocumentField-DnxRXfSc.js";import"./FileUpload-CrbvLQ_f.js";import"./ManagedACTAccessRequirementFormWikiWrapper-htf7tpW4.js";import"./GridLegacy-Qs7jK3sN.js";import"./ResearchProjectForm-DqAn1NEj.js";import"./TextFieldWithWordLimit-3Sr7Wd6e.js";import"./AuthenticatedRequirement-CDIFuEiC.js";import"./CertificationRequirement-D9gzfEvK.js";import"./TwoFactorAuthEnabledRequirement-TIlv0F3E.js";import"./ValidationRequirement-DwcSc5g9.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-BzjNMonG.js";import"./RejectDataAccessRequestModal-Dm5h4Xzl.js";import"./CannedRejectionDialog-D_x_2p_C.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-Cb77eqVv.js";import"./Checkbox-BEAP1Si0.js";import"./Grid-DKvo9WFo.js";import"./upperFirst-CnnNYvSD.js";import"./_stringToArray-BkwtTL0n.js";const xe={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),s.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return t.json(a,{status:200})}),s.get(`${e}${R(":id")}`,()=>t.json(m,{status:200})),s.get(`${e}${E(":id")}`,()=>t.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),s.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>t.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),s.put(`${e}${i(":id")}`,async({request:r})=>t.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[s.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return t.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Je=["Demo","DemoError"];export{o as Demo,n as DemoError,Je as __namedExportsOrder,xe as default};
