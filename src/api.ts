import axios from "axios";

import {
  Alerts,
  ArtifactWithTags,
  CommandOutput,
  Config,
  IPInfo,
  SearchParams,
} from "@/types";

const client = axios.create({
  headers: {
    Accept: "application/json",
  },
});

export const API = {
  async getConfig(): Promise<Config> {
    const res = await client.get<Config>("/api/config");
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
    const res = await client.get<string[]>("/api/tags");
    return res.data;
  },

  async getSources(): Promise<string[]> {
    const res = await client.get<string[]>("/api/sources");
    return res.data;
  },

  async deleteAlert(id: number): Promise<void> {
    await client.delete(`/api/alerts/${id}`);
  },

  async getArtifact(id: number): Promise<ArtifactWithTags> {
    const res = await client.get(`/api/artifacts/${id}`);
    return res.data;
  },

  async deleteArtifact(id: number): Promise<void> {
    await client.delete(`/api/artifacts/${id}`);
  },

  async deleteTag(name: string): Promise<void> {
    await client.delete(`/api/tags/${name}`);
  },

  async runCommand(command: string): Promise<CommandOutput> {
    const res = await client.post<CommandOutput>("/api/command", { command });
    return res.data;
  },

  async getIPInfo(ipAddress: string): Promise<IPInfo> {
    const res = await client.get<IPInfo>(`/api/ip_addresses/${ipAddress}`);
    return res.data;
  },
};
