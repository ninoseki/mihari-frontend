import axios, { AxiosResponse } from "axios";

import {
  Alerts,
  ArtifactWithTags,
  CommandInput,
  CommandOutput,
  Config,
  IPInfo,
  SearchParams,
  Sources,
  Tags,
} from "@/types";

const client = axios.create({
  headers: {
    Accept: "application/json",
  },
});

export const API = {
  async getConfigs(): Promise<Config[]> {
    const res = await client.get<Config[]>("/api/configs");
    return res.data;
  },

  async getAlerts(params: SearchParams): Promise<Alerts> {
    params.page = params.page || 1;
    const res = await client.get<Alerts>("/api/alerts", {
      params: params,
    });
    return res.data;
  },

  async getTags(): Promise<string[]> {
    const res = await client.get<Tags>("/api/tags");
    return res.data.tags;
  },

  async getSources(): Promise<string[]> {
    const res = await client.get<Sources>("/api/sources");
    return res.data.sources;
  },

  async deleteAlert(id: number): Promise<void> {
    await client.delete(`/api/alerts/${id}`);
  },

  async getArtifact(id: number): Promise<ArtifactWithTags> {
    const res = await client.get(`/api/artifacts/${id}`);
    return res.data;
  },

  async enrichArtifact(id: number): Promise<void> {
    await client.get(`/api/artifacts/${id}/enrich`);
    return;
  },

  async deleteArtifact(id: number): Promise<void> {
    await client.delete(`/api/artifacts/${id}`);
  },

  async deleteTag(name: string): Promise<void> {
    await client.delete(`/api/tags/${name}`);
  },

  async runCommand(command: string): Promise<CommandOutput> {
    const res = await client.post<CommandInput, AxiosResponse<CommandOutput>>(
      "/api/command",
      {
        command: command,
      }
    );
    return res.data;
  },

  async getIPInfo(ipAddress: string): Promise<IPInfo> {
    const res = await client.get<IPInfo>(`/api/ip_addresses/${ipAddress}`);
    return res.data;
  },
};
