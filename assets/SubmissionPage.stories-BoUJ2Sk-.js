import{z as u,b as e,o as d,s as t,kq as i,kr as c,H as s,ks as R,i as m,kt as E,ku as _,a0 as I,dH as S,k9 as O}from"./iframe-BzzjdWy2.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-BXgQNUgd.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-xuTEz7m3.js";import"./useAccessRequirements-kYJ3PYfJ.js";import"./index-1bES-Dua.js";import"./_baseOrderBy-Vveb-2oh.js";import"./_baseIteratee-B6ZKTAjZ.js";import"./_baseMap-BcYx9XOM.js";import"./_baseEach-CkA66oLy.js";import"./useInfiniteQuery-BbfstQUl.js";import"./groupBy-Bu9cKJtq.js";import"./_createAggregator-C2OdGhGC.js";import"./DialogBase-CGfYT4BU.js";import"./Close-D2aGDGHY.js";import"./HelpPopover-BVPs66Bt.js";import"./MarkdownPopover-BIgmn6Ru.js";import"./LightTooltip-BMWg9unl.js";import"./MarkdownSynapse-17VbQenC.js";import"./SkeletonButton-BhLIT0JK.js";import"./SkeletonInlineBlock-DNuGrhmv.js";import"./SkeletonTable-CsxmarD8.js";import"./SkeletonParagraph-BgDI2leK.js";import"./EntityLink-zlxpLguf.js";import"./useEntity-CeyTu7fv.js";import"./pickBy-CNttmqhF.js";import"./isString-LxXz07Yg.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DLA8UuOf.js";import"./useGetEntityHeaders-CZEINY-p.js";import"./EntityIcon-Z8hrMk_b.js";import"./ErrorChip-CXdobc7i.js";import"./Chip-NSHEYu7d.js";import"./UserOrTeamBadge-BtuJ55Zc.js";import"./useUserGroupHeader-D1PoIV88.js";import"./TeamBadge-C2J6JE3M.js";import"./UserBadge-BqcxjeKR.js";import"./useUserBundle-pMV1EYk7.js";import"./MenuItem-BVsCkoVz.js";import"./Card-DdtvDXS4.js";import"./UnmanagedACTAccessRequirementItem-B5Q6bzYQ.js";import"./RequirementItem-L9Db7uDQ.js";import"./CheckTwoTone-CJ0pOMVm.js";import"./ManagedACTAccessRequirementItemView-wezxM05B.js";import"./SelfSignAccessRequirementItem-DjMpkuTS.js";import"./DataAccessRequestAccessorsFilesForm-DVK9KsCs.js";import"./enums-DECr4vaN.js";import"./_arrayReduce-CrxnWFSq.js";import"./uniq-Cf0o9KYj.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-lT9R_VFC.js";import"./UserSearchBox-I73bCcbb.js";import"./useDebouncedEffect-CerfYQOW.js";import"./Autocomplete-BAKaVVOT.js";import"./usePreviousProps-CKXyB07W.js";import"./RadioGroup-C-3ri_f5.js";import"./Radio-BgaAjC40.js";import"./SwitchBase-Cgw9rMrL.js";import"./FormGroup-Ddg1rAuQ.js";import"./FormControlLabel-CPkZMGo3.js";import"./UploadDocumentField-DfEEpn-e.js";import"./FileUpload-Vy8I2av_.js";import"./ManagedACTAccessRequirementFormWikiWrapper-BqRxLd-v.js";import"./GridLegacy-oKfyVass.js";import"./ResearchProjectForm-sZxpXR0P.js";import"./TextFieldWithWordLimit-Cbtkke6W.js";import"./AuthenticatedRequirement-CgQCYdPf.js";import"./CertificationRequirement-CFd1PMIJ.js";import"./TwoFactorAuthEnabledRequirement-B5HnNuAy.js";import"./ValidationRequirement-juMOtXal.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-CmDW1yDm.js";import"./RejectDataAccessRequestModal-DHhqlNpl.js";import"./CannedRejectionDialog-EQkcoxHS.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog--Me4EPSq.js";import"./Checkbox-DssC3FEB.js";import"./Grid-Cam_jVY-.js";import"./upperFirst-wVBfwP3o.js";import"./_stringToArray-CJrFpvQC.js";const Je={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${R(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${E(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
