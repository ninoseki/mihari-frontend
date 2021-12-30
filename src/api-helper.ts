import { Task, useAsyncTask } from "vue-concurrency";

import { API } from "@/api";
import {
  Alerts,
  ArtifactWithTags,
  CommandOutput,
  Config,
  IPInfo,
  SearchParams,
} from "@/types";

export function generateGetAlertsTask(): Task<Alerts, [SearchParams]> {
  return useAsyncTask<Alerts, [SearchParams]>(async (_signal, params) => {
    return await API.getAlerts(params);
  });
}

export function generateDeleteAlertTask(): Task<void, [number]> {
  return useAsyncTask<void, [number]>(async (_signal, id) => {
    return await API.deleteAlert(id);
  });
}

export function generateGetTagsTask(): Task<string[], []> {
  return useAsyncTask<string[], []>(async () => {
    return await API.getTags();
  });
}

export function generateDeleteTagTask(): Task<void, [string]> {
  return useAsyncTask<void, [string]>(async (_signal, tag) => {
    return await API.deleteTag(tag);
  });
}

export function generateGetSourcesTask(): Task<string[], []> {
  return useAsyncTask<string[], []>(async () => {
    return await API.getSources();
  });
}

export function generateGetArtifactTask(): Task<ArtifactWithTags, [number]> {
  return useAsyncTask<ArtifactWithTags, [number]>(async (_signal, id) => {
    return await API.getArtifact(id);
  });
}

export function generateDeleteArtifactTask(): Task<void, [number]> {
  return useAsyncTask<void, [number]>(async (_signal, id) => {
    return await API.deleteArtifact(id);
  });
}

export function generateEnrichArtifactTask(): Task<void, [number]> {
  return useAsyncTask<void, [number]>(async (_signal, id) => {
    return await API.enrichArtifact(id);
  });
}

export function generateRunCommandTask(): Task<CommandOutput, [string]> {
  return useAsyncTask<CommandOutput, [string]>(async (_signal, command) => {
    return await API.runCommand(command);
  });
}

export function generateGetConfigsTask(): Task<Config[], []> {
  return useAsyncTask<Config[], []>(async () => {
    return await API.getConfigs();
  });
}

export function generateGetIPTask(): Task<IPInfo, [string]> {
  return useAsyncTask<IPInfo, [string]>(async (_signal, ipAddress: string) => {
    return await API.getIPInfo(ipAddress);
  });
}
