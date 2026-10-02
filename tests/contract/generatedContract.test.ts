// This test table comes from spec 3 section 4.2 of the v4 public API specification.
// This file is hand-written and listed in .fernignore.

import { readFileSync, readdirSync } from "node:fs";
import { join, relative } from "node:path";
import { cwd, env } from "node:process";
import { parse as parseUuid, validate as validateUuid, version as uuidVersion } from "uuid";
import * as ts from "typescript";

import { ZepClient } from "../../src/Client.js";
import * as core from "../../src/core/index.js";
import { SDK_VERSION } from "../../src/version.js";
import { mockServerPool } from "../mock-server/MockServerPool.js";

// Source: spec 3 section 4.2 (endpoint map). Columns: SDK method, HTTP method,
// path, paginated (P), POST read (spec 3 section 2.9).
const SECTION_4_2_OPERATIONS: ReadonlyArray<readonly [string, string, string, boolean, boolean]> = [
    ["project.get", "GET", "/project", false, false],
    ["project.update", "PATCH", "/project", false, false],
    ["project.get_content_policy", "GET", "/project/content-policy", false, false],
    ["project.set_content_policy", "PUT", "/project/content-policy", false, false],
    ["project.list_content_policy_revisions", "GET", "/project/content-policy/revisions", true, false],
    ["project.get_content_policy_revision", "GET", "/project/content-policy/revisions/{revision_uuid}", false, false],
    ["project.get_instructions", "GET", "/project/instructions", false, false],
    ["project.set_instructions", "PUT", "/project/instructions", false, false],
    ["project.get_observation_steering", "GET", "/project/observation-steering", false, false],
    ["project.set_observation_steering", "PUT", "/project/observation-steering", false, false],
    ["project.get_ontology", "GET", "/project/ontology", false, false],
    ["project.set_ontology", "PUT", "/project/ontology", false, false],
    ["project.get_user_summary_instructions", "GET", "/project/user-summary-instructions", false, false],
    ["project.set_user_summary_instructions", "PUT", "/project/user-summary-instructions", false, false],
    ["context.create_template", "POST", "/context-templates", false, false],
    ["context.list_templates", "POST", "/context-templates/list", true, true],
    ["context.delete_template", "DELETE", "/context-templates/{template_uuid}", false, false],
    ["context.get_template", "GET", "/context-templates/{template_uuid}", false, false],
    ["context.update_template", "PUT", "/context-templates/{template_uuid}", false, false],
    ["agent.create", "POST", "/agents", false, false],
    ["agent.list", "POST", "/agents/list", true, true],
    ["agent.delete", "DELETE", "/agents/{agent_uuid}", false, false],
    ["agent.get", "GET", "/agents/{agent_uuid}", false, false],
    ["agent.update", "PATCH", "/agents/{agent_uuid}", false, false],
    ["agent.declare_breaking_change", "POST", "/agents/{agent_uuid}/breaking-changes", false, false],
    ["agent.get_context", "POST", "/agents/{agent_uuid}/context", false, true],
    ["agent.split.plan", "POST", "/agents/{agent_uuid}/split-plan", false, false],
    ["agent.literal_policy.get", "GET", "/agents/{agent_uuid}/literal-policy", false, false],
    ["agent.literal_policy.update", "PUT", "/agents/{agent_uuid}/literal-policy", false, false],
    ["agent.skill.candidate.list", "GET", "/agents/{agent_uuid}/skill-candidates", true, false],
    ["agent.skill.candidate.get", "GET", "/agents/{agent_uuid}/skill-candidates/{review_uuid}", false, false],
    [
        "agent.skill.evaluation.create_for_candidate",
        "POST",
        "/agents/{agent_uuid}/skill-candidates/{review_uuid}/candidates/{candidate_uuid}/evaluations",
        false,
        false,
    ],
    ["agent.learning.get", "GET", "/agents/{agent_uuid}/learning", true, false],
    ["agent.learning.list_runs", "GET", "/agents/{agent_uuid}/learning-runs", true, false],
    ["agent.skill.create", "POST", "/agents/{agent_uuid}/skills", false, false],
    ["agent.skill.import_package", "POST", "/agents/{agent_uuid}/skills/import", false, false],
    ["agent.skill.list", "POST", "/agents/{agent_uuid}/skills/list", true, true],
    ["agent.skill.search", "POST", "/agents/{agent_uuid}/skills/search", true, true],
    ["agent.skill.get", "GET", "/agents/{agent_uuid}/skills/{skill_uuid}", false, false],
    ["agent.skill.publication.get", "GET", "/agents/{agent_uuid}/skills/{skill_uuid}/publication", false, false],
    ["agent.skill.publication.lookup", "GET", "/agents/{agent_uuid}/skill-publications", false, false],
    ["agent.skill.use.create", "POST", "/agents/{agent_uuid}/skills/{skill_uuid}/uses", false, false],
    [
        "agent.skill.use.add_outcome",
        "POST",
        "/agents/{agent_uuid}/skills/{skill_uuid}/uses/{use_uuid}/outcome",
        false,
        false,
    ],
    ["agent.skill.approve", "POST", "/agents/{agent_uuid}/skills/{skill_uuid}/approve", false, false],
    ["agent.skill.evaluation.create", "POST", "/agents/{agent_uuid}/skills/{skill_uuid}/evaluations", false, false],
    ["agent.skill.evidence.list", "GET", "/agents/{agent_uuid}/skills/{skill_uuid}/evidence", true, false],
    ["agent.skill.relation.list", "GET", "/agents/{agent_uuid}/skills/{skill_uuid}/relations", true, false],
    [
        "agent.skill.version.restore_version",
        "POST",
        "/agents/{agent_uuid}/skills/{skill_uuid}/restore-version",
        false,
        false,
    ],
    ["agent.skill.retire", "POST", "/agents/{agent_uuid}/skills/{skill_uuid}/retire", false, false],
    ["agent.skill.version.list", "GET", "/agents/{agent_uuid}/skills/{skill_uuid}/versions", true, false],
    ["agent.skill.create_version", "POST", "/agents/{agent_uuid}/skills/{skill_uuid}/versions", false, false],
    ["agent.skill.version.compare", "POST", "/agents/{agent_uuid}/skills/{skill_uuid}/versions/compare", false, true],
    ["agent.skill.version.get", "GET", "/agents/{agent_uuid}/skills/{skill_uuid}/versions/{version}", false, false],
    [
        "agent.skill.export.create",
        "POST",
        "/agents/{agent_uuid}/skills/{skill_uuid}/versions/{version}/export",
        false,
        false,
    ],
    [
        "agent.skill.export.get",
        "GET",
        "/agents/{agent_uuid}/skills/{skill_uuid}/versions/{version}/export/{task_uuid}",
        false,
        false,
    ],
    ["agent.trajectory.create", "POST", "/agents/{agent_uuid}/trajectories", false, false],
    ["agent.trajectory.list", "POST", "/agents/{agent_uuid}/trajectories/list", true, true],
    ["agent.trajectory.get", "GET", "/agents/{agent_uuid}/trajectories/{trajectory_uuid}", false, false],
    ["agent.trajectory.update", "PATCH", "/agents/{agent_uuid}/trajectories/{trajectory_uuid}", false, false],
    ["agent.trajectory.delete", "DELETE", "/agents/{agent_uuid}/trajectories/{trajectory_uuid}", false, false],
    ["agent.trajectory.abandon", "POST", "/agents/{agent_uuid}/trajectories/{trajectory_uuid}/abandon", false, false],
    ["agent.trajectory.close", "POST", "/agents/{agent_uuid}/trajectories/{trajectory_uuid}/close", false, false],
    [
        "agent.trajectory.correct_task_family",
        "POST",
        "/agents/{agent_uuid}/trajectories/{trajectory_uuid}/correct-task-family",
        false,
        false,
    ],
    ["agent.trajectory.list_events", "GET", "/agents/{agent_uuid}/trajectories/{trajectory_uuid}/events", true, false],
    [
        "agent.trajectory.append_event",
        "POST",
        "/agents/{agent_uuid}/trajectories/{trajectory_uuid}/events",
        false,
        false,
    ],
    [
        "agent.trajectory.delete_event",
        "DELETE",
        "/agents/{agent_uuid}/trajectories/{trajectory_uuid}/events/{event_uuid}",
        false,
        false,
    ],
    ["agent.trajectory.reopen", "POST", "/agents/{agent_uuid}/trajectories/{trajectory_uuid}/reopen", false, false],
    [
        "agent.trajectory.get_summary",
        "GET",
        "/agents/{agent_uuid}/trajectories/{trajectory_uuid}/summary",
        false,
        false,
    ],
    [
        "agent.trajectory.list_summary_versions",
        "GET",
        "/agents/{agent_uuid}/trajectories/{trajectory_uuid}/summary/versions",
        true,
        false,
    ],
    ["agent.verifier.list", "POST", "/agents/{agent_uuid}/verifiers/list", true, true],
    ["agent.verifier.get", "GET", "/agents/{agent_uuid}/verifiers/{verifier_uuid}", false, false],
    ["agent.verifier.update", "PATCH", "/agents/{agent_uuid}/verifiers/{verifier_uuid}", false, false],
    [
        "agent.verifier.invalidate_evidence",
        "POST",
        "/agents/{agent_uuid}/verifiers/{verifier_uuid}/invalidate-evidence",
        false,
        false,
    ],
    ["agent.verifier.revoke", "POST", "/agents/{agent_uuid}/verifiers/{verifier_uuid}/revoke", false, false],
    ["user.create", "POST", "/users", false, false],
    ["user.list", "POST", "/users/list", true, true],
    ["user.lookup", "POST", "/users/lookup", false, true],
    ["user.delete", "DELETE", "/users/{user_uuid}", false, false],
    ["user.get", "GET", "/users/{user_uuid}", false, false],
    ["user.update", "PATCH", "/users/{user_uuid}", false, false],
    ["user.get_node", "GET", "/users/{user_uuid}/node", false, false],
    ["user.get_summary_instructions", "GET", "/users/{user_uuid}/summary-instructions", false, false],
    ["user.set_summary_instructions", "PUT", "/users/{user_uuid}/summary-instructions", false, false],
    ["user_group.list_for_user", "GET", "/users/{user_uuid}/user-groups", true, false],
    ["thread.list", "GET", "/threads", true, false],
    ["thread.create", "POST", "/threads", false, false],
    ["thread.lookup", "POST", "/threads/lookup", false, true],
    ["thread.delete", "DELETE", "/threads/{thread_uuid}", false, false],
    ["thread.get", "GET", "/threads/{thread_uuid}", false, false],
    ["thread.get_context", "GET", "/threads/{thread_uuid}/context", false, false],
    ["thread.list_episodes", "GET", "/threads/{thread_uuid}/episodes", true, false],
    ["thread.list_messages", "GET", "/threads/{thread_uuid}/messages", true, false],
    ["thread.add_messages", "POST", "/threads/{thread_uuid}/messages", false, false],
    ["thread.message.get", "GET", "/threads/{thread_uuid}/messages/{message_uuid}", false, false],
    ["thread.message.update", "PATCH", "/threads/{thread_uuid}/messages/{message_uuid}", false, false],
    ["thread.get_summary", "GET", "/threads/{thread_uuid}/summary", false, false],
    ["graph.create", "POST", "/graphs", false, false],
    ["graph.list", "POST", "/graphs/list", true, true],
    ["graph.lookup", "POST", "/graphs/lookup", false, true],
    ["graph.delete", "DELETE", "/graphs/{graph_uuid}", false, false],
    ["graph.get", "GET", "/graphs/{graph_uuid}", false, false],
    ["graph.update", "PATCH", "/graphs/{graph_uuid}", false, false],
    ["graph.clone", "POST", "/graphs/{graph_uuid}/clone", false, false],
    ["graph.get_context", "POST", "/graphs/{graph_uuid}/context", false, true],
    ["graph.get_content_policy", "GET", "/graphs/{graph_uuid}/content-policy", false, false],
    ["graph.list_content_policy_events", "POST", "/graphs/{graph_uuid}/content-policy/events/list", true, true],
    ["graph.document_summary.list", "POST", "/graphs/{graph_uuid}/document-summaries/list", true, true],
    ["graph.episode.list_for_document", "GET", "/graphs/{graph_uuid}/documents/{document_id}/episodes", true, false],
    ["graph.edge.add", "POST", "/graphs/{graph_uuid}/edges", false, false],
    ["graph.edge.list", "POST", "/graphs/{graph_uuid}/edges/list", true, true],
    ["graph.edge.delete", "DELETE", "/graphs/{graph_uuid}/edges/{edge_uuid}", false, false],
    ["graph.edge.get", "GET", "/graphs/{graph_uuid}/edges/{edge_uuid}", false, false],
    ["graph.edge.update", "PATCH", "/graphs/{graph_uuid}/edges/{edge_uuid}", false, false],
    ["graph.episode.add", "POST", "/graphs/{graph_uuid}/episodes", false, false],
    ["graph.episode.list", "POST", "/graphs/{graph_uuid}/episodes/list", true, true],
    ["graph.episode.delete", "DELETE", "/graphs/{graph_uuid}/episodes/{episode_uuid}", false, false],
    ["graph.episode.get", "GET", "/graphs/{graph_uuid}/episodes/{episode_uuid}", false, false],
    ["graph.episode.update", "PATCH", "/graphs/{graph_uuid}/episodes/{episode_uuid}", false, false],
    ["graph.hyperedge.add", "POST", "/graphs/{graph_uuid}/hyperedges", false, false],
    ["graph.hyperedge.list", "POST", "/graphs/{graph_uuid}/hyperedges/list", true, true],
    ["graph.hyperedge.delete", "DELETE", "/graphs/{graph_uuid}/hyperedges/{hyperedge_uuid}", false, false],
    ["graph.hyperedge.get", "GET", "/graphs/{graph_uuid}/hyperedges/{hyperedge_uuid}", false, false],
    ["graph.hyperedge.update", "PATCH", "/graphs/{graph_uuid}/hyperedges/{hyperedge_uuid}", false, false],
    ["graph.hyperedge.create_edge", "POST", "/graphs/{graph_uuid}/hyperedges/{hyperedge_uuid}/edges", false, false],
    [
        "graph.hyperedge.delete_edge",
        "DELETE",
        "/graphs/{graph_uuid}/hyperedges/{hyperedge_uuid}/edges/{edge_uuid}",
        false,
        false,
    ],
    ["graph.get_instructions", "GET", "/graphs/{graph_uuid}/instructions", false, false],
    ["graph.set_instructions", "PUT", "/graphs/{graph_uuid}/instructions", false, false],
    ["graph.node.add", "POST", "/graphs/{graph_uuid}/nodes", false, false],
    ["graph.node.list", "POST", "/graphs/{graph_uuid}/nodes/list", true, true],
    ["graph.node.delete", "DELETE", "/graphs/{graph_uuid}/nodes/{node_uuid}", false, false],
    ["graph.node.get", "GET", "/graphs/{graph_uuid}/nodes/{node_uuid}", false, false],
    ["graph.node.update", "PATCH", "/graphs/{graph_uuid}/nodes/{node_uuid}", false, false],
    ["graph.node.list_neighbors", "POST", "/graphs/{graph_uuid}/nodes/{node_uuid}/neighbors", true, true],
    ["graph.get_observation_steering", "GET", "/graphs/{graph_uuid}/observation-steering", false, false],
    ["graph.set_observation_steering", "PUT", "/graphs/{graph_uuid}/observation-steering", false, false],
    ["graph.observation.list", "POST", "/graphs/{graph_uuid}/observations/list", true, true],
    ["graph.observation.get", "GET", "/graphs/{graph_uuid}/observations/{observation_uuid}", false, false],
    ["graph.get_ontology", "GET", "/graphs/{graph_uuid}/ontology", false, false],
    ["graph.set_ontology", "PUT", "/graphs/{graph_uuid}/ontology", false, false],
    ["graph.search_edges", "POST", "/graphs/{graph_uuid}/search/edges", true, true],
    ["graph.search_episodes", "POST", "/graphs/{graph_uuid}/search/episodes", true, true],
    ["graph.search_nodes", "POST", "/graphs/{graph_uuid}/search/nodes", true, true],
    ["graph.search_observations", "POST", "/graphs/{graph_uuid}/search/observations", true, true],
    ["graph.search_thread_summaries", "POST", "/graphs/{graph_uuid}/search/thread-summaries", true, true],
    ["graph.get_subgraph", "POST", "/graphs/{graph_uuid}/subgraph", false, true],
    ["graph.thread_summary.list", "POST", "/graphs/{graph_uuid}/thread-summaries/list", true, true],
    ["graph.warm", "POST", "/graphs/{graph_uuid}/warm", false, false],
    ["batch.list", "GET", "/batches", true, false],
    ["batch.create", "POST", "/batches", false, false],
    ["batch.delete", "DELETE", "/batches/{batch_uuid}", false, false],
    ["batch.get", "GET", "/batches/{batch_uuid}", false, false],
    ["batch.list_items", "GET", "/batches/{batch_uuid}/items", true, false],
    ["batch.add_items", "POST", "/batches/{batch_uuid}/items", false, false],
    ["batch.process", "POST", "/batches/{batch_uuid}/process", false, false],
    ["task.list", "GET", "/tasks", true, false],
    ["task.get", "GET", "/tasks/{task_uuid}", false, false],
    ["user_group.create", "POST", "/user-groups", false, false],
    ["user_group.list", "POST", "/user-groups/list", true, true],
    ["user_group.delete", "DELETE", "/user-groups/{group_uuid}", false, false],
    ["user_group.get", "GET", "/user-groups/{group_uuid}", false, false],
    ["user_group.update", "PATCH", "/user-groups/{group_uuid}", false, false],
    ["user_group.list_member_candidates", "POST", "/user-groups/{group_uuid}/member-candidates/list", true, true],
    ["user_group.add_members", "POST", "/user-groups/{group_uuid}/members", false, false],
    ["user_group.list_members", "POST", "/user-groups/{group_uuid}/members/list", true, true],
    ["user_group.remove_members", "POST", "/user-groups/{group_uuid}/members/remove", false, false],
    ["user_group.remove_member", "DELETE", "/user-groups/{group_uuid}/members/{user_uuid}", false, false],
    ["lookup.batch", "POST", "/lookup", false, true],
];

// Section 4.2 rows that spec 3 section 14.1 keeps out of the generated SDKs.
const EXCLUDED_FROM_SDK = new Set<string>([
    "user_group.list_policy_sets", // docs audience
    "user_group.attach_policy_set", // docs audience
    "user_group.detach_policy_set", // docs audience
    "abac.list_api_keys", // /abac administrative plane (zepctl only)
    "abac.list_api_key_policy_sets", // /abac administrative plane (zepctl only)
    "abac.attach_api_key_policy_set", // /abac administrative plane (zepctl only)
    "abac.detach_api_key_policy_set", // /abac administrative plane (zepctl only)
    "abac.get_api_key_settings", // /abac administrative plane (zepctl only)
    "abac.set_api_key_settings", // /abac administrative plane (zepctl only)
    "abac.evaluate_policy", // /abac administrative plane (zepctl only)
    "abac.explain_policy", // /abac administrative plane (zepctl only)
    "abac.list_policy_sets", // /abac administrative plane (zepctl only)
    "abac.create_policy_set", // /abac administrative plane (zepctl only)
    "abac.validate_policy_set", // /abac administrative plane (zepctl only)
    "abac.delete_policy_set", // /abac administrative plane (zepctl only)
    "abac.get_policy_set", // /abac administrative plane (zepctl only)
    "abac.update_policy_set", // /abac administrative plane (zepctl only)
    "abac.detach_retention_target", // /abac administrative plane (zepctl only)
    "abac.list_retention_targets", // /abac administrative plane (zepctl only)
    "abac.attach_retention_target", // /abac administrative plane (zepctl only)
]);

const MISSING_FROM_ALPHA5 = new Set<string>([
    "project.get_content_policy",
    "project.set_content_policy",
    "project.list_content_policy_revisions",
    "project.get_content_policy_revision",
    "agent.create",
    "agent.list",
    "agent.delete",
    "agent.get",
    "agent.update",
    "agent.declare_breaking_change",
    "agent.get_context",
    "agent.split.plan",
    "agent.literal_policy.get",
    "agent.literal_policy.update",
    "agent.skill.candidate.list",
    "agent.skill.candidate.get",
    "agent.skill.evaluation.create_for_candidate",
    "agent.learning.get",
    "agent.learning.list_runs",
    "agent.skill.create",
    "agent.skill.import_package",
    "agent.skill.list",
    "agent.skill.search",
    "agent.skill.get",
    "agent.skill.publication.get",
    "agent.skill.publication.lookup",
    "agent.skill.use.create",
    "agent.skill.use.add_outcome",
    "agent.skill.approve",
    "agent.skill.evaluation.create",
    "agent.skill.evidence.list",
    "agent.skill.relation.list",
    "agent.skill.version.restore_version",
    "agent.skill.retire",
    "agent.skill.version.list",
    "agent.skill.create_version",
    "agent.skill.version.compare",
    "agent.skill.version.get",
    "agent.skill.export.create",
    "agent.skill.export.get",
    "agent.trajectory.create",
    "agent.trajectory.list",
    "agent.trajectory.get",
    "agent.trajectory.update",
    "agent.trajectory.delete",
    "agent.trajectory.abandon",
    "agent.trajectory.close",
    "agent.trajectory.correct_task_family",
    "agent.trajectory.list_events",
    "agent.trajectory.append_event",
    "agent.trajectory.delete_event",
    "agent.trajectory.reopen",
    "agent.trajectory.get_summary",
    "agent.trajectory.list_summary_versions",
    "agent.verifier.list",
    "agent.verifier.get",
    "agent.verifier.update",
    "agent.verifier.invalidate_evidence",
    "agent.verifier.revoke",
    "graph.get_content_policy",
    "graph.list_content_policy_events",
    "graph.hyperedge.add",
    "graph.hyperedge.list",
    "graph.hyperedge.delete",
    "graph.hyperedge.get",
    "graph.hyperedge.update",
    "graph.hyperedge.create_edge",
    "graph.hyperedge.delete_edge",
]);

const ALPHA5_POST_READ_EXPOSES_IDEMPOTENCY = new Set<string>([
    "context.list_templates",
    "user.list",
    "user.lookup",
    "thread.lookup",
    "graph.list",
    "graph.lookup",
    "graph.get_context",
    "graph.document_summary.list",
    "graph.edge.list",
    "graph.episode.list",
    "graph.node.list",
    "graph.node.list_neighbors",
    "graph.observation.list",
    "graph.search_edges",
    "graph.search_episodes",
    "graph.search_nodes",
    "graph.search_observations",
    "graph.search_thread_summaries",
    "graph.get_subgraph",
    "graph.thread_summary.list",
    "user_group.list",
    "user_group.list_member_candidates",
    "user_group.list_members",
    "lookup.batch",
]);

const D1_REASON =
    "The generator configuration does not enable automatic Idempotency-Key generation (spec 3 section 14.6), so a state-changing call without a caller key sends no Idempotency-Key.";
const D5_REASON =
    "Spec 3 section 4.2 marks agent.learning.get as paginated, but the v4 contract returns one AgentLearningState with no cursor, so the generated method returns no pager.";
const CALLER_KEY = "contract-caller-key";
const PROJECT_UUID = "00000000-0000-4000-8000-000000000001";
const API_RESOURCES_ROOT = join(cwd(), "src", "api", "resources");
const API_ROOT = join(cwd(), "src", "api");

type RequestMethod = "get" | "post" | "put" | "patch" | "delete";

interface ParsedClientMethod {
    readonly requestOptionsType: string | undefined;
    readonly returnType: ts.TypeNode | undefined;
    readonly sourceFile: ts.SourceFile;
}

function missingOperationReason(operation: string): string | undefined {
    if (SDK_VERSION !== "4.0.0-alpha.5") {
        return undefined;
    }
    if (MISSING_FROM_ALPHA5.has(operation)) {
        return `${operation}: absent from the 4.0.0-alpha.5 generated code; present in the current spec 3 contract`;
    }
    return undefined;
}

function gapReason(operation: string, isPostRead = false): string | undefined {
    const missingOperation = missingOperationReason(operation);
    if (missingOperation !== undefined) {
        return missingOperation;
    }
    if (SDK_VERSION !== "4.0.0-alpha.5") {
        return undefined;
    }
    if (isPostRead && ALPHA5_POST_READ_EXPOSES_IDEMPOTENCY.has(operation)) {
        return `${operation}: POST read; the 4.0.0-alpha.5 contract marks it idempotent`;
    }
    return undefined;
}

function camelCase(segment: string): string {
    return segment.replace(/_([a-z0-9])/g, (_match, letter: string) => letter.toUpperCase());
}

function generatedOperationName(operation: string): string {
    return operation.split(".").map(camelCase).join(".");
}

function readTypeScriptFile(filePath: string): ts.SourceFile {
    return ts.createSourceFile(filePath, readFileSync(filePath, "utf8"), ts.ScriptTarget.Latest, true);
}

function findTypeScriptFiles(directory: string): string[] {
    return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
        const filePath = join(directory, entry.name);
        return entry.isDirectory()
            ? findTypeScriptFiles(filePath)
            : entry.isFile() && filePath.endsWith(".ts")
              ? [filePath]
              : [];
    });
}

function clientResourcePath(filePath: string): string {
    return relative(API_RESOURCES_ROOT, filePath)
        .replaceAll("\\", "/")
        .replace(/\/client\/Client\.ts$/, "")
        .replace(/\/resources\//g, ".")
        .replaceAll("/", ".");
}

function collectClientMethods(): Map<string, ParsedClientMethod> {
    const methods = new Map<string, ParsedClientMethod>();
    for (const filePath of findTypeScriptFiles(API_RESOURCES_ROOT).filter((file) =>
        file.endsWith("/client/Client.ts"),
    )) {
        const sourceFile = readTypeScriptFile(filePath);
        const resourcePath = clientResourcePath(filePath);
        const visit = (node: ts.Node): void => {
            if (ts.isMethodDeclaration(node) && node.name && ts.isIdentifier(node.name)) {
                const methodName = node.name.text;
                const isPrivate = node.modifiers?.some(
                    (modifier) =>
                        modifier.kind === ts.SyntaxKind.PrivateKeyword ||
                        modifier.kind === ts.SyntaxKind.ProtectedKeyword,
                );
                if (!isPrivate && !methodName.startsWith("_")) {
                    const requestOptions = node.parameters.find(
                        (parameter) => ts.isIdentifier(parameter.name) && parameter.name.text === "requestOptions",
                    );
                    const operation = `${resourcePath}.${methodName}`;
                    methods.set(operation, {
                        requestOptionsType: requestOptions?.type?.getText(sourceFile),
                        returnType: node.type,
                        sourceFile,
                    });
                }
            }
            ts.forEachChild(node, visit);
        };
        visit(sourceFile);
    }
    return methods;
}

const CLIENT_METHODS = collectClientMethods();

function resolveClientMethod(client: ZepClient, operation: string): unknown {
    return operation
        .split(".")
        .map(camelCase)
        .reduce<unknown>((target, name) => {
            if (target === null || typeof target !== "object") {
                return undefined;
            }
            return (target as Record<string, unknown>)[name];
        }, client);
}

function collectRuntimeClientMethods(client: object): Set<string> {
    const methods = new Set<string>();
    const visited = new Set<object>();
    const visit = (target: object, path: string): void => {
        if (visited.has(target)) {
            return;
        }
        visited.add(target);
        const prototype = Object.getPrototypeOf(target);
        for (const name of Object.getOwnPropertyNames(prototype)) {
            if (name === "constructor" || name.startsWith("_")) {
                continue;
            }
            if (path !== "" && typeof (target as Record<string, unknown>)[name] === "function") {
                methods.add(`${path}${name}`);
            }
            const descriptor = Object.getOwnPropertyDescriptor(prototype, name);
            if (descriptor?.get) {
                const value = (target as Record<string, unknown>)[name];
                if (value !== null && typeof value === "object" && value.constructor?.name.endsWith("Client")) {
                    visit(value, `${path}${name}.`);
                }
            }
        }
        for (const [name, value] of Object.entries(target)) {
            if (name.startsWith("_") || value === null || typeof value !== "object") {
                continue;
            }
            if (value.constructor?.name.endsWith("Client")) {
                visit(value, `${path}${name}.`);
            }
        }
    };
    visit(client, "");
    return methods;
}

function containsTypeReference(typeNode: ts.TypeNode | undefined, expectedName: string): boolean {
    if (typeNode === undefined) {
        return false;
    }
    let found = false;
    const visit = (node: ts.Node): void => {
        if (ts.isTypeReferenceNode(node)) {
            const name = node.typeName.getText().split(".").at(-1);
            if (name === expectedName) {
                found = true;
            }
        }
        ts.forEachChild(node, visit);
    };
    visit(typeNode);
    return found;
}

function findInterfacePropertyType(
    filePath: string,
    interfaceName: string,
    propertyName: string,
): { sourceFile: ts.SourceFile; typeNode: ts.TypeNode } | undefined {
    const sourceFile = readTypeScriptFile(filePath);
    const declaration = sourceFile.statements.find(
        (statement): statement is ts.InterfaceDeclaration =>
            ts.isInterfaceDeclaration(statement) && statement.name.text === interfaceName,
    );
    const property = declaration?.members.find(
        (member): member is ts.PropertySignature =>
            ts.isPropertySignature(member) &&
            member.name !== undefined &&
            ts.isIdentifier(member.name) &&
            member.name.text === propertyName,
    );
    return property?.type ? { sourceFile, typeNode: property.type } : undefined;
}

function stringEnumValues(filePath: string, typeName: string): Set<string> {
    const sourceFile = readTypeScriptFile(filePath);
    const declaration = sourceFile.statements.find(
        (statement): statement is ts.TypeAliasDeclaration =>
            ts.isTypeAliasDeclaration(statement) && statement.name.text === typeName,
    );
    if (declaration && ts.isUnionTypeNode(declaration.type)) {
        const values = declaration.type.types.map((member) =>
            ts.isLiteralTypeNode(member) && ts.isStringLiteral(member.literal) ? member.literal.text : undefined,
        );
        if (values.every((value) => value !== undefined)) {
            return new Set(values as string[]);
        }
    }
    const enumObject = sourceFile.statements
        .filter(ts.isVariableStatement)
        .flatMap((statement) => statement.declarationList.declarations)
        .find((variable) => ts.isIdentifier(variable.name) && variable.name.text === typeName);
    let initializer = enumObject?.initializer;
    while (initializer && ts.isAsExpression(initializer)) {
        initializer = initializer.expression;
    }
    if (!initializer || !ts.isObjectLiteralExpression(initializer)) {
        return new Set();
    }
    const values = initializer.properties.map((property) =>
        ts.isPropertyAssignment(property) && ts.isStringLiteral(property.initializer)
            ? property.initializer.text
            : undefined,
    );
    if (values.some((value) => value === undefined)) {
        return new Set();
    }
    return new Set(values as string[]);
}

function nameWords(name: string): string[] {
    return name
        .replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2")
        .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
        .split(/[^A-Za-z0-9]+/)
        .filter(Boolean)
        .map((word) => word.toLowerCase());
}

function findForbiddenWords(name: string): string[] {
    const words = nameWords(name);
    const findings: string[] = [];
    if (words.includes("lastn")) {
        findings.push("lastn");
    }
    if (words.includes("scope")) {
        findings.push("scope");
    }
    for (let index = 0; index < words.length - 1; index += 1) {
        const pair = `${words[index]} ${words[index + 1]}`;
        if (pair === "uuid cursor" || pair === "group id") {
            findings.push(pair);
        }
    }
    return findings;
}

type RequestRecord = Request;

function makeClient(
    server: ReturnType<typeof mockServerPool.createServer>,
    requests: RequestRecord[],
    options: ZepClient.Options = {},
): ZepClient {
    const networkFetch = globalThis.fetch.bind(globalThis);
    const recordingFetch: typeof fetch = async (input, init) => {
        const request = new Request(input, init);
        requests.push(request.clone());
        return networkFetch(request);
    };
    return new ZepClient({
        baseUrl: server.baseUrl,
        maxRetries: 0,
        fetch: recordingFetch,
        ...options,
    });
}

function mockJsonEndpoint(
    server: ReturnType<typeof mockServerPool.createServer>,
    method: RequestMethod,
    path: string,
    body: unknown,
    status = 200,
    responseHeaders: Record<string, string> = {},
    requestHeaders?: Record<string, string>,
): void {
    const requestBuilder =
        method === "get"
            ? server.mockEndpoint().get(path)
            : method === "post"
              ? server.mockEndpoint().post(path)
              : method === "put"
                ? server.mockEndpoint().put(path)
                : method === "patch"
                  ? server.mockEndpoint().patch(path)
                  : server.mockEndpoint().delete(path);
    const responseBuilder = (requestHeaders ? requestBuilder.headers(requestHeaders) : requestBuilder)
        .respondWith()
        .statusCode(status)
        .headers(responseHeaders);
    responseBuilder.jsonBody(body).build();
}

function mockJsonEndpointSequence(
    server: ReturnType<typeof mockServerPool.createServer>,
    method: RequestMethod,
    path: string,
    responses: ReadonlyArray<{
        body: unknown;
        status?: number;
        responseHeaders?: Record<string, string>;
    }>,
): void {
    for (const response of [...responses].reverse()) {
        mockJsonEndpoint(server, method, path, response.body, response.status, response.responseHeaders);
    }
}

function pageBody(items: string[], nextCursor?: string): object {
    return {
        items: items.map((uuid) => ({ uuid })),
        ...(nextCursor === undefined ? {} : { next_cursor: nextCursor }),
    };
}

describe("generated SDK contract", () => {
    beforeAll(() => mockServerPool.listen());
    afterAll(() => mockServerPool.close());

    for (const operationRow of SECTION_4_2_OPERATIONS) {
        const [operation] = operationRow;
        const expected = missingOperationReason(operation);
        const register = expected ? it.fails : it;
        register(`exposes every section 4.2 method: ${operation}`, () => {
            const client = new ZepClient({ auth: false });
            expect(resolveClientMethod(client, operation), expected ?? operation).toBeTypeOf("function");
        });
    }

    it("exposes no method outside section 4.2", () => {
        const client = new ZepClient({ auth: false });
        const expected = new Set(SECTION_4_2_OPERATIONS.map(([operation]) => generatedOperationName(operation)));
        const actual = collectRuntimeClientMethods(client);
        const extras = [...actual].filter((operation) => !expected.has(operation));
        expect(extras).toEqual([]);
        const excluded = new Set([...EXCLUDED_FROM_SDK].map(generatedOperationName));
        expect([...actual].filter((operation) => excluded.has(operation))).toEqual([]);
    });

    for (const operationRow of SECTION_4_2_OPERATIONS) {
        const [operation, , , paginated] = operationRow;
        if (!paginated) {
            continue;
        }
        const expected =
            missingOperationReason(operation) ?? (operation === "agent.learning.get" ? D5_REASON : undefined);
        const register = expected ? it.fails : it;
        register(`returns a Page from every paginated operation: ${operation}`, () => {
            const method = CLIENT_METHODS.get(generatedOperationName(operation));
            expect(method, expected ?? operation).toBeDefined();
            expect(containsTypeReference(method?.returnType, "Page"), operation).toBe(true);
            expect(method?.returnType?.getText(method?.sourceFile)).toContain("Promise<");
        });
    }

    it.each([
        "batch.list",
        "user.list",
    ] as const)("traverses two pages and stops without next_cursor: %s", async (operation) => {
        const server = mockServerPool.createServer();
        const requests: RequestRecord[] = [];
        const path = operation === "batch.list" ? "/batches" : "/users/list";
        const method = operation === "batch.list" ? "get" : "post";
        mockJsonEndpointSequence(server, method, path, [
            { body: pageBody([`${operation}-1`, `${operation}-2`], "c1") },
            { body: pageBody([`${operation}-3`, `${operation}-4`]) },
        ]);
        const client = makeClient(server, requests, { apiKey: "contract-api-key" });
        const page =
            operation === "batch.list" ? await client.batch.list({ limit: 2 }) : await client.user.list({ limit: 2 });
        expect(page).toBeInstanceOf(core.Page);

        const items: string[] = [];
        for await (const item of page) {
            if (item.uuid === undefined) {
                throw new Error(`${operation} page item has no UUID`);
            }
            items.push(item.uuid);
        }

        expect(requests).toHaveLength(2);
        expect(new URL(requests[1].url).searchParams.get("cursor")).toBe("c1");
        expect(items).toEqual([`${operation}-1`, `${operation}-2`, `${operation}-3`, `${operation}-4`]);
        expect(new Set(items).size).toBe(4);
        expect(requests).toHaveLength(2);
    });

    for (const operationRow of SECTION_4_2_OPERATIONS) {
        const [operation, method, , , postRead] = operationRow;
        const expected = gapReason(operation, postRead);
        const register = expected ? it.fails : it;
        register(`exposes idempotency options only on state-changing methods: ${operation}`, () => {
            const clientMethod = CLIENT_METHODS.get(generatedOperationName(operation));
            expect(clientMethod, expected ?? operation).toBeDefined();
            const requestOptionsType = clientMethod?.requestOptionsType ?? "";
            const isStateChanging = method !== "GET" && !postRead;
            if (isStateChanging) {
                expect(requestOptionsType, operation).toContain("IdempotentRequestOptions");
            } else {
                expect(requestOptionsType, operation).toContain("RequestOptions");
                expect(requestOptionsType, operation).not.toContain("IdempotentRequestOptions");
            }
        });
    }

    it.fails("sends a UUIDv4 Idempotency-Key when the caller gives none", async () => {
        const server = mockServerPool.createServer();
        const requests: RequestRecord[] = [];
        mockJsonEndpoint(server, "post", "/users", {});
        const client = makeClient(server, requests, { apiKey: "contract-api-key" });
        await client.user.create({});

        const key = requests[0]?.headers.get("Idempotency-Key");
        if (key === null || key === undefined) {
            throw new Error(D1_REASON);
        }
        expect(validateUuid(key), D1_REASON).toBe(true);
        expect(uuidVersion(key), D1_REASON).toBe(4);
        expect(parseUuid(key)[8] & 0xc0, D1_REASON).toBe(0x80);
    });

    it("sends the caller Idempotency-Key unchanged", async () => {
        const server = mockServerPool.createServer();
        const requests: RequestRecord[] = [];
        mockJsonEndpoint(server, "post", "/users", {}, 200, {}, { "Idempotency-Key": CALLER_KEY });
        const client = makeClient(server, requests, { apiKey: "contract-api-key" });
        await client.user.create({}, { idempotencyKey: CALLER_KEY });
        expect(requests[0]?.headers.get("Idempotency-Key")).toBe(CALLER_KEY);
    });

    it.fails("reuses the generated Idempotency-Key on a retry", async () => {
        const server = mockServerPool.createServer();
        const requests: RequestRecord[] = [];
        mockJsonEndpointSequence(server, "post", "/users", [
            { body: {}, status: 503, responseHeaders: { "Retry-After": "1" } },
            { body: {} },
        ]);
        const client = makeClient(server, requests, { apiKey: "contract-api-key" });
        await client.user.create({}, { maxRetries: 1 });

        expect(requests).toHaveLength(2);
        const firstKey = requests[0]?.headers.get("Idempotency-Key");
        const secondKey = requests[1]?.headers.get("Idempotency-Key");
        if (firstKey === null || firstKey === undefined) {
            throw new Error(D1_REASON);
        }
        expect(secondKey, D1_REASON).toBe(firstKey);
    });

    it("reuses the caller Idempotency-Key on a retry", async () => {
        const server = mockServerPool.createServer();
        const requests: RequestRecord[] = [];
        mockJsonEndpointSequence(server, "post", "/users", [
            { body: {}, status: 503, responseHeaders: { "Retry-After": "1" } },
            { body: {} },
        ]);
        const client = makeClient(server, requests, { apiKey: "contract-api-key" });
        await client.user.create({}, { idempotencyKey: CALLER_KEY, maxRetries: 1 });

        expect(requests).toHaveLength(2);
        expect(requests.map((request) => request.headers.get("Idempotency-Key"))).toEqual([CALLER_KEY, CALLER_KEY]);
    });

    it("sends no Idempotency-Key on GET and POST-read calls", async () => {
        const server = mockServerPool.createServer();
        const requests: RequestRecord[] = [];
        mockJsonEndpoint(server, "get", "/project", {});
        mockJsonEndpoint(server, "post", "/users/list", { items: [] });
        const client = makeClient(server, requests, { apiKey: "contract-api-key" });
        await client.project.get();
        await client.user.list({ limit: 1 });

        expect(requests).toHaveLength(2);
        expect(requests.map((request) => request.headers.get("Idempotency-Key"))).toEqual([null, null]);
    });

    it("sends the project API key", async () => {
        const server = mockServerPool.createServer();
        const requests: RequestRecord[] = [];
        mockJsonEndpoint(server, "get", "/project", {}, 200, {}, { Authorization: "Api-Key contract-api-key" });
        const client = makeClient(server, requests, { apiKey: "contract-api-key" });
        await client.project.get();

        expect(requests[0]?.headers.get("Authorization")).toBe("Api-Key contract-api-key");
        expect(requests[0]?.headers.get("X-Zep-Project")).toBeNull();
    });

    it("sends the admin bearer token with X-Zep-Project", async () => {
        const previousApiKey = env.ZEP_API_KEY;
        delete env.ZEP_API_KEY;
        try {
            const server = mockServerPool.createServer();
            const requests: RequestRecord[] = [];
            mockJsonEndpoint(server, "get", "/project", {});
            const client = makeClient(server, requests, {
                auth: async () => ({
                    headers: {
                        Authorization: "Bearer contract-token",
                        "X-Zep-Project": PROJECT_UUID,
                    },
                }),
            });
            await client.project.get();

            expect(requests[0]?.headers.get("Authorization")).toBe("Bearer contract-token");
            expect(requests[0]?.headers.get("X-Zep-Project")).toBe(PROJECT_UUID);
            expect(requests[0]?.headers.get("Api-Key")).toBeNull();
        } finally {
            if (previousApiKey === undefined) {
                delete env.ZEP_API_KEY;
            } else {
                env.ZEP_API_KEY = previousApiKey;
            }
        }
    });

    it("types graph context recencyBias as the off, mild, strong string enum", () => {
        const requestPath = join(API_RESOURCES_ROOT, "graph", "client", "requests", "GraphContextRequest.ts");
        const property = findInterfacePropertyType(requestPath, "GraphContextRequest", "recencyBias");
        if (property === undefined) {
            throw new Error("GraphContextRequest.recencyBias is missing");
        }
        expect(property.typeNode.getText(property.sourceFile)).toContain("V4GraphContextRequestRecencyBias");
        expect(
            stringEnumValues(
                join(API_RESOURCES_ROOT, "graph", "types", "V4GraphContextRequestRecencyBias.ts"),
                "V4GraphContextRequestRecencyBias",
            ),
        ).toEqual(new Set(["off", "mild", "strong"]));
    });

    it("does not type thread context recencyBias as an object", () => {
        const requestPath = join(API_RESOURCES_ROOT, "thread", "client", "requests", "ThreadGetContextRequest.ts");
        const property = findInterfacePropertyType(requestPath, "ThreadGetContextRequest", "recencyBias");
        if (property === undefined) {
            return;
        }
        expect(property.typeNode.kind).not.toBe(ts.SyntaxKind.TypeLiteral);
        expect(property.typeNode.getText(property.sourceFile)).toContain("V4GraphContextRequestRecencyBias");
        expect(
            stringEnumValues(
                join(API_RESOURCES_ROOT, "graph", "types", "V4GraphContextRequestRecencyBias.ts"),
                "V4GraphContextRequestRecencyBias",
            ),
        ).toEqual(new Set(["off", "mild", "strong"]));
    });

    it("has no generated name with a v3-only concept", () => {
        const offenders: string[] = [];
        for (const filePath of findTypeScriptFiles(API_ROOT)) {
            const sourceFile = readTypeScriptFile(filePath);
            const location = relative(API_ROOT, filePath).replaceAll("\\", "/");
            const scan = (node: ts.Node): void => {
                if (
                    (ts.isInterfaceDeclaration(node) ||
                        ts.isTypeAliasDeclaration(node) ||
                        (ts.isEnumDeclaration(node) &&
                            node.modifiers?.some((modifier) => modifier.kind === ts.SyntaxKind.ConstKeyword))) &&
                    node.modifiers?.some((modifier) => modifier.kind === ts.SyntaxKind.ExportKeyword)
                ) {
                    const name = node.name.text;
                    const findings = findForbiddenWords(name);
                    if (findings.length > 0) {
                        offenders.push(`${location}:${name} (${findings.join(", ")})`);
                    }
                }
                if (filePath.endsWith("/client/Client.ts") && ts.isMethodDeclaration(node) && node.name) {
                    const isPrivate = node.modifiers?.some(
                        (modifier) =>
                            modifier.kind === ts.SyntaxKind.PrivateKeyword ||
                            modifier.kind === ts.SyntaxKind.ProtectedKeyword,
                    );
                    const name = ts.isIdentifier(node.name) ? node.name.text : node.name.getText(sourceFile);
                    if (!isPrivate && !name.startsWith("_")) {
                        const findings = findForbiddenWords(name);
                        if (findings.length > 0) {
                            offenders.push(`${location}:${name} (${findings.join(", ")})`);
                        }
                    }
                }
                ts.forEachChild(node, scan);
            };
            scan(sourceFile);
        }
        expect(offenders, offenders.join("\n")).toEqual([]);
    });
});
