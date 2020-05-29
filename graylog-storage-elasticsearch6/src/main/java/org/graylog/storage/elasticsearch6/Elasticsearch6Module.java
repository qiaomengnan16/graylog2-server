package org.graylog.storage.elasticsearch6;

import org.graylog2.indexer.cluster.ClusterAdapter;
import org.graylog2.indexer.indices.IndicesAdapter;
import org.graylog2.plugin.PluginModule;

public class Elasticsearch6Module extends PluginModule {
    @Override
    protected void configure() {
        bind(IndicesAdapter.class).to(IndicesAdapterES6.class);
        bind(ClusterAdapter.class).to(ClusterAdapterES6.class);
    }
}
