import{g as I,k as S,n as t,a2 as O,e2 as g,b as e,kt as i,ku as C,H as s,kv as l,p as m,kw as b,kx as T,k8 as A}from"./iframe-Bvv4ID9O.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-DcJAp1eC.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-INo1pTrX.js";import"./useAccessRequirements-ChMKDqbL.js";import"./index-TPGr2WBQ.js";import"./_baseOrderBy-CC9PT-Tk.js";import"./_baseIteratee-B2Cz-LID.js";import"./_baseMap-B8nDev1C.js";import"./_baseEach-1ZgQ0wWk.js";import"./useQueries-BaeJQT80.js";import"./useInfiniteQuery-DnzzjwPo.js";import"./groupBy-B1UkiPHQ.js";import"./_createAggregator-CYtq9KGe.js";import"./DialogBase-DI9hpM3M.js";import"./Close-gfuBCl1y.js";import"./HelpPopover-KjW2Liz1.js";import"./MarkdownPopover-DtkdEBJk.js";import"./LightTooltip-BbQfoeul.js";import"./MarkdownSynapse-BqihxWd0.js";import"./SkeletonButton-CX_iqB-U.js";import"./SkeletonInlineBlock-B4dGOeql.js";import"./SkeletonTable-CrAxGwqy.js";import"./SkeletonParagraph-BrF-J-9t.js";import"./EntityLink-wWrBau-4.js";import"./useEntity-CQx6ZGyk.js";import"./pickBy-BQy0wlEN.js";import"./isString-B1KplquY.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BUM-NT4n.js";import"./useGetEntityHeaders-BH9Feabo.js";import"./EntityIcon-DGQliSdv.js";import"./ErrorChip-BFASt8Hq.js";import"./Chip-CH6SKqjX.js";import"./UserOrTeamBadge-Dme-44dH.js";import"./UserBadge-fKQtuujV.js";import"./MenuItem-CfdXNe3p.js";import"./Card-ibXZcJOb.js";import"./TeamBadge-DM3J0wZs.js";import"./UnmanagedACTAccessRequirementItem-CtoKzx1n.js";import"./RequirementItem-BQwUAXOm.js";import"./LockTwoTone-BwmrW-5Z.js";import"./UserSearchBoxV2-CCyZ5NlQ.js";import"./useDebouncedEffect-Dyu4V5v_.js";import"./use-deep-compare-effect.esm-Bv4Uo8BR.js";import"./uniq-t9BK9sU2.js";import"./without-BmG3GZAB.js";import"./Select-aab027f3.esm-DOcWOc1J.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-BZuL5Mty.js";import"./SelfSignAccessRequirementItem-BexpEK25.js";import"./DataAccessRequestAccessorsFilesForm-CL41sBja.js";import"./enums-bS2G9jfn.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-Dof4IbnR.js";import"./RadioGroup-C93PoMEa.js";import"./Radio-BmihMdHb.js";import"./SwitchBase-DbcTZZVB.js";import"./FormGroup-BlbIknjS.js";import"./FormControlLabel-DBzgkQXq.js";import"./UploadDocumentField-B7BCnNHv.js";import"./FileUpload-BONgdUOV.js";import"./ManagedACTAccessRequirementFormWikiWrapper-C0ACQd46.js";import"./GridLegacy-BOsDICVd.js";import"./ResearchProjectForm-Y_S8-kW6.js";import"./TextFieldWithWordLimit-BeoSrdKl.js";import"./AuthenticatedRequirement-CoyKTteC.js";import"./CertificationRequirement-D6oMKB_X.js";import"./TwoFactorAuthEnabledRequirement-CJT4VyGb.js";import"./ValidationRequirement-D1-Cvhgl.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-BorsIIV8.js";import"./RejectDataAccessRequestModal-qKcxinvY.js";import"./CannedRejectionDialog-aOlZFZqa.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-BWepRO3O.js";import"./Checkbox-VqvVXxOy.js";import"./Grid-LuVi20o5.js";import"./upperFirst-DK_DXjSn.js";import"./_stringToArray-Czu5hsXT.js";const tr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var d,c,R;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(R=(c=n.parameters)==null?void 0:c.docs)==null?void 0:R.source}}};const sr=["Demo","DemoError"];export{o as Demo,n as DemoError,sr as __namedExportsOrder,tr as default};
