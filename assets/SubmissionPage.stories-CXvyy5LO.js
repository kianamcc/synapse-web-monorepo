import{z as u,b as e,o as d,s,kq as i,kr as c,H as t,ks as R,i as m,kt as E,ku as _,a0 as I,dH as S,k9 as O}from"./iframe-BB1CyglU.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-DWXyB6_t.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-DtHP4cXr.js";import"./useAccessRequirements-BxB9372J.js";import"./index-BLt8cigd.js";import"./_baseOrderBy-CzmdTjbu.js";import"./_baseIteratee-yswP77C1.js";import"./_baseMap-CAb0E05m.js";import"./_baseEach-UzDtS0gP.js";import"./useInfiniteQuery-hdDrux36.js";import"./groupBy-C2zaaV_Y.js";import"./_createAggregator-Fjfo9JK0.js";import"./DialogBase-ZmMylcay.js";import"./Close-Bm3BYI87.js";import"./HelpPopover-DpOHdoba.js";import"./MarkdownPopover-DUEIEIHd.js";import"./LightTooltip-B9cGyM6Q.js";import"./MarkdownSynapse-Bp46o5vr.js";import"./SkeletonButton-q-Dp6RFE.js";import"./SkeletonInlineBlock-dhIvV08s.js";import"./SkeletonTable-EsMLBsV_.js";import"./SkeletonParagraph-CfPPR8eC.js";import"./EntityLink-CDDEIm94.js";import"./useEntity-DB7TJ2Jp.js";import"./pickBy-WU22Swdo.js";import"./isString-DnUJ7bUV.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CGBaDnkV.js";import"./useGetEntityHeaders-BtYiFMGP.js";import"./EntityIcon-3G9Pr1da.js";import"./ErrorChip-CqpK26d-.js";import"./Chip-CF5f4rXb.js";import"./UserOrTeamBadge-CitIv8I3.js";import"./UserBadge-CHe7Nhbm.js";import"./useUserBundle-Bf-9hfkn.js";import"./MenuItem-ChUmjrmC.js";import"./Card-M3Ee8JJT.js";import"./TeamBadge-C4Zmd7ex.js";import"./UnmanagedACTAccessRequirementItem-D4zme-od.js";import"./RequirementItem-79yzWZ9f.js";import"./CheckTwoTone-xPpRvlT8.js";import"./ManagedACTAccessRequirementItemView-QnEn9tEg.js";import"./SelfSignAccessRequirementItem-XRvwUi05.js";import"./DataAccessRequestAccessorsFilesForm-sFhoVLfi.js";import"./enums-BD6Gf4jI.js";import"./_arrayReduce-CrxnWFSq.js";import"./uniq-BfgxidcQ.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-B8_zxwW8.js";import"./UserSearchBox-DTgFr-fl.js";import"./useDebouncedEffect-6G0Ug4OG.js";import"./Autocomplete-CYtlEtNG.js";import"./usePreviousProps-ZC0xOhlJ.js";import"./RadioGroup-CGxlf66p.js";import"./Radio-u0ArbEzc.js";import"./SwitchBase-DBcCC2Ae.js";import"./FormGroup-BzV2Oe0k.js";import"./FormControlLabel-AsYqHmfp.js";import"./UploadDocumentField-BHPtLfkL.js";import"./FileUpload-Bri2AIyi.js";import"./ManagedACTAccessRequirementFormWikiWrapper-Bj_3b69c.js";import"./GridLegacy-CKJ47nkU.js";import"./ResearchProjectForm-BCHoS0j3.js";import"./TextFieldWithWordLimit-DrmHLhuz.js";import"./AuthenticatedRequirement-BidfVtUF.js";import"./CertificationRequirement-Bs8FGHaD.js";import"./TwoFactorAuthEnabledRequirement-C6jdhahD.js";import"./ValidationRequirement-DfclDqs7.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-CreExNOe.js";import"./RejectDataAccessRequestModal-DoONSugH.js";import"./CannedRejectionDialog-CMgxDwz6.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-c8z7MNMM.js";import"./Checkbox-B1LsbIzZ.js";import"./Grid-CDu8w-CH.js";import"./upperFirst-DH7uNUfE.js";import"./_stringToArray-BHLOnUyC.js";const xe={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),s.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return t.json(a,{status:200})}),s.get(`${e}${R(":id")}`,()=>t.json(m,{status:200})),s.get(`${e}${E(":id")}`,()=>t.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),s.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>t.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),s.put(`${e}${i(":id")}`,async({request:r})=>t.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[s.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return t.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
